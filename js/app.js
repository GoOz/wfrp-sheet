document.addEventListener('DOMContentLoaded', (event) => {
  checkStorage();

  // Collections
  const simpleInputs = document.querySelectorAll('.simple');
  const additionInputs = document.querySelectorAll('.addition');
  const contentEditable = document.querySelectorAll('[contenteditable]');
  const characSelects = document.querySelectorAll('.charac-select');
  const outputs = document.querySelectorAll('output');
  const talents = document.getElementById('talents');

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
  talents.addEventListener('input', handleTalentsInput);

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
      // Generate talents custom rows if data available
      const talentsTbody = document.querySelector('.talents tbody');
      let i = 1;
      while (
        localStorage.getItem(`talents-name-${i}`) !== null ||
        localStorage.getItem(`talents-counter-${i}`) !== null ||
        localStorage.getItem(`talents-desc-${i}`) !== null
      ) {
        addNewTalentRow(talentsTbody, i);
        i++
      }

      // Add a blank row for new addition
      addNewTalentRow(talentsTbody, i);

      // Fill every inputs in the page
      const inputs = document.querySelectorAll('input, select');
      await inputs.forEach(input => {
        const item = localStorage.getItem(input.id);
        input.value = item ?? null;
        if (input.type === 'hidden') {
          input.previousElementSibling.textContent = item;
        }
        if (item && input.tagName === 'SELECT') {
          input.dispatchEvent(new Event('change', { 'bubbles': true }));
        }
      });

      // Once all data is filled, proceed with updating outputs
      updateOutputs(outputs);
    }
  }

  // Store data from simple inputs
  function handleSimpleInput(event) {
    localStorage.setItem(event.target.id, event.target.value);
  }

  // Store data from addition inputs and update related outputs
  function handleAdditionInput(event) {
    localStorage.setItem(event.target.id, event.target.value);
    const outputs = document.querySelectorAll(`output[for~=${event.target.id}]`);
    updateOutputs(outputs);
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

  // Store custom talents data and add new blank row
  function handleTalentsInput(event) {
    const tbody = event.target.closest('tbody');
    const totalRows = tbody.children;
    const currentRow = event.target.closest('tr');

    // If current inputted row is the last row then create a new row.
    if (currentRow === totalRows[totalRows.length - 1]) {
      addNewTalentRow(tbody, totalRows.length);
    }
  }

  // Add new blank talent row
  function addNewTalentRow(parent, n) {
    const template = document.getElementById('talent-row');
    const clone = template.content.cloneNode(true);

    let inputs = clone.querySelectorAll('input');
    let contentEditable = clone.querySelectorAll('[contentEditable]');
    inputs[0].name = `talents-name-${n}`
    inputs[0].id = `talents-name-${n}`
    inputs[1].name = `talents-counter-${n}`
    inputs[1].id = `talents-counter-${n}`
    inputs[2].name = `talents-desc-${n}`
    inputs[2].id = `talents-desc-${n}`

    inputs.forEach(input => {
      input.addEventListener('input', handleSimpleInput);
    });
    contentEditable.forEach(content => {
      content.addEventListener('input', handleContentEditable);
    });

    parent.appendChild(clone);
  }

  // Update outputs from related inputs value
  function updateOutputs(outputs) {
    outputs.forEach(output => {
      let current = 0;
      const inputs = output.getAttribute('for').split(' ');
      if (inputs[0] === '') {
        return false;
      }

      for (let i = 0; i < inputs.length; i++) {
        const input = document.getElementById(`${inputs[i]}`);
        const value = input.value !== '' ? parseInt(input.value,10) : 0;
        if (output.id === 'walk') {
          current = value * 2;
        } else if (output.id === 'run') {
          current = value * 4;
        } else {
          current = current + value;
        }
      }
      output.value = current;
    });
  }
});
