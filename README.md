# Warhammer Fantasy RolePlay (4th edition) sheet
An online tool to help you manage your **Warhammer Fantasy Role Play** game's character sheet

## App's presentation

No Ads, no tracker and no data storage on a server, whether it's personal data or not.

All your data is stored on your localStorage, meaning it stays in your browser's storage, on your computer.

## App's features
  - Auto-filling cells
  - Auto-calculated final values (initial + advances)
  - Responsive layout
  - Dark mode
  - Highlight career skills
  - Import/Export data
  - Internationalisation (i18n)

### Rules
#### Personal infos section
- Every field is a free form except for the *species* field which will impact the **wounds** landmark (see below).

#### Characteristics section
- Only *initial* value and *advances* value for each characteristic are editable (**numbers only**) , the *current* field is auto-calculated based on the two values set above.
- Note that the *current* value will be used at several places in the app.

#### Points section
- For **Fate** and **Resilience** tables, every field is free (**numbers only**) and not related to anything else.
- **Experience** table has its *current* & *spent* fields free (**numbers only**) but the *total* one is auto-calculated base on those two previous fields.

#### Movement section
- *Walk* and *run* are auto-calculated based on the value set in the *movement* field (**numbers only**).

#### Basic skills
- For every skill, the only free field is the *advances* one (**numbers only**). The characteristic base one is auto-filled with the current characteristic’s value and the end *skill* one is auto-calculated based on the values of the base and the advance.

#### Custom skills
- Same logic here than the **basic skills** section except that you can select the *characteristic base* in the select dropdown which will auto-fill the *current characteristic* value right on the side.

#### Talents section
- Only free form fields unrelated to anything else.

#### Ambitions section
- Only free form fields unrelated to anything else.

#### Party section
- Only free form fields unrelated to anything else.

#### Armour section
- All fields are free
- *Encumbrance* is **numbers only**
- *Worn* checkbox, if checked, will affect the **Encumbrance** section

#### Trappings section
- All fields are free
- *Encumbrance* is **numbers only**
- *Worn* checkbox, if checked, will affect the **Encumbrance** section

#### Weapons section
- All fields are free
- *Encumbrance* is **numbers only**
- *Worn* checkbox, if checked, will affect the **Encumbrance** section

#### Encumbrance section
- *Weapons*, *armour* & *trappings* fields will automatically reflect the total weight for their respective type, meaning it will add up the weight of all its registered items and put the total in its field.
- Every item with the *worn* property checked will see its weight reduced by 1 which will affect the total just as specified above.
- *Maximum encumbrance* field is free but is is **numbers only**.
- *Total* field is auto-calculated. If the total of *Weapons*, *armour* & *trappings* values are strictly greater than the *maximum encumbrance* value then you’ll be notified that you reached the state of **overburdened**.

#### Armour points section
- All fields are free and **numbers only**

#### Wounds section
- All fields are auto-calculated.
    - *Strength bonus* is based on your *current Strength characteristic* and only applied if your *species* is **not halfling**
    - *Tougness bonus* is based on your *current Toughness characteristic*
    - *Will power bonus* is based on your *current Will power characteristic*
    - *Hardy* checkbox is to be checked if you actually got the talent. If so, it will update the total wounds accordingly.
    - *Total* adds up every field above.
- The *current wounds* field is free and **numbers only**

#### Wealth section
- Only free form fields (**numbers only**) unrelated to anything else.

#### Psychology section
- Only a free form field unrelated to anything else.

#### Corruption section
- Only free form fields unrelated to anything else.
- Threshold and current corruption are **numbers only** when mutation accepts anything.

#### Spells & prayers section
- Only free form fields unrelated to anything else.


### Data
As specified before this application relies on **[LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)**.

There’s no specificities on how or how long a browser should retain data stored in the localstorage so not every browser does the same.

If you’re using any **blink-based** (Chrome, Edge, Brave, Vivaldi, etc) or **Gecko-based** (Firefox) browsers, you should be fine as they only empty the data if they run out of space. As a fail safe though the application asks for a permission to  make the data persistent, meaning to keep it even if they run out of space. 

Surprisingly enough only Firefox is actually asking the user for the permission to do so. 

In any case, **you don’t have to accept**, it should ensures the longevity of your local data but you would still can store data locally if you deny the permission.

As for **Safari** though, any local data on a website not visited **within 7 days** will be trashed. On iOS, it should not be the case though if you add the website on your homescreen, as if it was an app.

In any case, I strongly suggest everyone using this app to do some backup export  of your data every once in a while, and maybe every time you end your session if you’re using Safari.

Any lost data will be lost forever.

### i18n
There's no plan for adding other languages than english and french mostly because those are the only two I can read and write well enough.

That being said, if needed and if provided by a Pull Request, I could add new languages without a problem, the translation system is here and waiting new ones.

## For Developers
If you want to modify this tool for your own copy or to make a pull request later you'll need Node.js and a code editor mostly.

1. Clone or download the repo
2. Run `npm ci` to download & install dependencies. This tool runs on [11ty](https://www.11ty.dev/) and some plugins but that's pretty much it.
3. Do your thing.
4. Run `npm serve` to start the server and see your changes in your browser
5. Profit ☕

Pull requests and Issues are obviously welcome.
