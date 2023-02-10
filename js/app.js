document.addEventListener('DOMContentLoaded', (event) => {
  const encumbranceMessage = [
    [
      "Pas de pénalité"
    ],
    [
      "Surchargé Niv. 1",
      "-1 mouvement (Min: 3)",
      "-10 en agilité",
      "+1 fatigue du voyage"
    ],
    [
      "Surchargé Niv. 2",
      "-2 mouvement (Min: 2)",
      "-20 en agilité",
      "+2 fatigue du voyage"
    ],
    [
      "Surchargé Niv. 3",
      "Vous ne pouvez plus vous déplacer"
    ]
  ]

  checkStorage();

  // Collections
  const simpleInputs = document.querySelectorAll('.simple');
  const additionInputs = document.querySelectorAll('.addition');
  const contentEditable = document.querySelectorAll('[contenteditable]');
  const characSelects = document.querySelectorAll('.charac-select');
  const outputs = document.querySelectorAll('output:not(.bonus, .hidden, encumbrance-total)');
  const bonuses = document.querySelectorAll('output.bonus');
  const customData = document.querySelectorAll('.custom');
  const toggleHardy = document.getElementById('hardy-bonus');
  const encumbranceSrc = document.querySelectorAll('.encumbrance-src');
  const encumbranceMax = document.getElementById('encumbrance-max')

  // Event Listeners
  simpleInputs.forEach(input => {
    input.addEventListener('input', handleSimpleInput);
  });
  additionInputs.forEach(input => {
    input.addEventListener('input', handleAdditionInput);
  });
  contentEditable.forEach(input => {
    input.addEventListener('input', handleContentEditable);
  });
  characSelects.forEach(select => {
    select.addEventListener('change', handleCharacSelect);
  });
  customData.forEach(custom => {
    custom.addEventListener('input', handleCustomInput);
  });
  toggleHardy.addEventListener('change', handleToggleHardy);
  encumbranceSrc.forEach(item => {
    item.addEventListener('input', handleEncumbrance);
    item.addEventListener('change', handleEncumbrance);
  });
  encumbranceMax.addEventListener('input', updateTotalEncumbrance);

  // Fill the sheet with stored data
  fillFromStorage();

  // Methods
  // --------------------
  // Check for persistent storage
  async function checkStorage() {
    if (navigator.storage && navigator.storage.persist) {
      const isPersisted = await navigator.storage.persisted();

      if (!isPersisted) {
        const persistGranted = await navigator.storage.persist();
        console.log(`Persisted storage granted: ${persistGranted}`);
      }
    }
  }

  // Fill inputs from locaStorage data
  async function fillFromStorage() {
    if (navigator.storage) {
      // Generate custom data rows if data available
      const custom = document.querySelectorAll('.custom');

      custom.forEach(custom => {
        const tbody = custom.querySelector('tbody');
        const type = custom.id;
        let i = 1;
        while (
          localStorage.getItem(`${type}-name-${i}`) !== null
        ) {
          addNewRow(tbody, i);
          i++
        }

        // Add a blank row for new addition
        addNewRow(tbody, i);
      })

      // Fill every inputs in the page
      const inputs = document.querySelectorAll('input, select');
      await inputs.forEach(input => {
        const item = localStorage.getItem(input.id);
        input.value = item ?? null;
        if (item && input.type === 'hidden') {
          input.previousElementSibling.textContent = item;
        }
        if (item && input.tagName === 'SELECT') {
          input.dispatchEvent(new Event('change', { 'bubbles': true }));
        }
        if (item && item === "true" && input.type === 'checkbox') {
          input.checked = true;
        }
      });

      // Once all data is filled, proceed with updating outputs
      updateBonuses();
      encumbranceSrc.forEach(src => {
        src.dispatchEvent(new Event('change', {'bubbles': true}));
      });
      updateOutputs(outputs);

      updateTitle();
    }
  }

  // Store data from simple inputs
  function handleSimpleInput(event) {
    if (event.target.type === "checkbox") {
      localStorage.setItem(event.target.id, event.target.checked);
    } else {
      localStorage.setItem(event.target.id, event.target.value);
    }
  }

  // Store data from addition inputs and update related outputs
  function handleAdditionInput(event) {
    localStorage.setItem(event.target.id, event.target.value);
    const outputs = document.querySelectorAll(`output[for~=${event.target.id}]:not(.bonus)`);
    updateOutputs(outputs);
    updateBonuses();
  }

  // Duplicate data from contenteditable elements to hidden inputs and store them
  function handleContentEditable(event) {
    const input = event.target.nextElementSibling;
    input.value = event.target.textContent;
    localStorage.setItem(input.id, input.value);
  }

  // Store custom skill base characteristic and update related output
  function handleCharacSelect(event) {
    const output = document.getElementById(event.target.dataset.input);
    output.setAttribute('for', `${event.target.value}-i ${event.target.value}-a`);
    updateOutputs(outputs);
    localStorage.setItem(event.target.id, event.target.value);
  }

  // Store custom data and add new blank row
  function handleCustomInput(event) {
    const tbody = event.target.closest('tbody');
    const totalRows = tbody.children;
    const currentRow = event.target.closest('tr');

    // If current inputted row is the last row then create a new row.
    if (currentRow === totalRows[totalRows.length - 1]) {
      addNewRow(tbody, totalRows.length);
    }
  }

  // Add wounds points if hardy talent is ON
  function handleToggleHardy() {
    const wounds = document.getElementById('wounds');
    updateOutputs([wounds]);
  }

  // Calculate stuff encumbrance
  function handleEncumbrance(event) {
    const type = event.target.tagName === 'FIELDSET'
      ? event.target
      : event.target.closest('fieldset');
    const weights = type.querySelectorAll(`tbody [id^=${type.id}-encumbrance-]`);
    const output = type.querySelector(`#encumbrance-${type.id}-total`);

    let total = 0;
    for (let i = 0; i < weights.length; i++) {
      let value = Number(weights[i].value);
      const worn = type.querySelector(`#${type.id}-worn-${i}`).checked;

      if (worn === true) {
        value = Math.max(0, value - 1);
      }

      total += value;
    }

    output.value = total;

    updateOutputs(outputs)
    updateTotalEncumbrance();
  }

  // Calculate if total encumbrance is above max encumbrance
  function updateTotalEncumbrance() {
    const armour = Number(document.getElementById('encumbrance-armour-total').value);
    const trappings = Number(document.getElementById('encumbrance-trappings-total').value);
    const weapons = Number(document.getElementById('encumbrance-weapons-total').value);
    const max = Number(document.getElementById('encumbrance-max').value);
    const total = document.getElementById('encumbrance-total');
    const messageBox = document.getElementById('encumbrance-state');

    total.value = armour + trappings + weapons;

    let messageType = 0;
    if (Number(total.value) <= max) {
      total.classList.remove('error');
    } else if (Number(total.value) <= max * 2) {
      total.classList.add('error');
      messageType = 1;
    } else if (Number(total.value) <= max * 3) {
      total.classList.add('error');
      messageType = 2;
    } else if (Number(total.value) > max * 3) {
      total.classList.add('error');
      messageType = 3;
    }

    messageBox.querySelector('p').textContent = encumbranceMessage[messageType][0];
    let content = '';
    for (let i = 1; i < encumbranceMessage[messageType].length; i++) {
      content += `<li>${encumbranceMessage[messageType][i]}</li>`
    }
    messageBox.querySelector('ul').innerHTML = content;
  }

  // Add new blank talent row
  function addNewRow(parent, n) {
    const type = parent.closest('fieldset').id;
    const template = document.getElementById(`${type}-row`);
    const clone = template.content.cloneNode(true);

    let inputs = clone.querySelectorAll('input');
    let contentEditable = clone.querySelectorAll('[contentEditable]');

    inputs.forEach(input => {
      input.name = input.name + n;
      input.id = input.id + n;
    });

    inputs.forEach(input => {
      input.addEventListener('input', handleSimpleInput);
    });
    contentEditable.forEach(content => {
      content.addEventListener('input', handleContentEditable);
    });

    parent.appendChild(clone);
  }

  // Generate bonuses from final characteristics
  function updateBonuses() {
    bonuses.forEach(bonus => {
      const inputs = bonus.getAttribute('for').split(' ');
      let current = 0;
      for (let i = 0; i < inputs.length; i++) {
        const input = document.getElementById(`${inputs[i]}`);
        const value = input.value !== '' ? parseInt(input.value,10) : 0;
        current += value;
      }
      bonus.value = current.toString()[0];
    });

    const outputs = document.querySelectorAll('[for^="bonus-"]');
    updateOutputs(outputs);
  }

  // Update outputs from related inputs value
  function updateOutputs(outputs) {
    outputs.forEach(output => {
      let current = 0;
      const inputs = output.getAttribute('for').split(' ');
      // console.log(inputs);
      if (inputs[0] === '') {
        return;
      }

      for (let i = 0; i < inputs.length; i++) {
        const input = document.getElementById(`${inputs[i]}`);
        const value = input.value !== '' ? parseInt(input.value,10) : 0;
        if (output.id === 'walk') {
          current = value * 2;
        } else if (output.id === 'run') {
          current = value * 4;
        } else {
          current += value;
        }
      }

      if (output.id === 'strength-bonus') {
        const species = document.getElementById('species');
        output.value = species.value !== 'halfling' ? current : 0;
      } else if (output.id === 'toughness-bonus') {
        output.value = current * 2;
      } else if (output.id === 'wounds') {
        if (toggleHardy.checked) {
          const toughness = document.getElementById('bonus-t');
          const value = toughness.value !== '' ? parseInt(toughness.value,10) : 0;
          output.value = current + value;
        } else {
          output.value = current;
        }
      } else {
        output.value = current;
      }
    });
  }

  function updateTitle() {
    if (localStorage.getItem('name')) {
      const base = document.title;
      const name = localStorage.getItem('name');
      document.title = `${name} - ${base}`;
    }
  }
});
