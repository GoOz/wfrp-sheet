# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.5.0] - 2025-12-01

### Added
- Support of Italian language


## [2.4.0] - 2025-10-15

### Added
- Support of Spanish language

## [2.3.0] - 2025-08-05

### Added
- A clear button in the settings to remove all character's data before importing.

## [2.2.0] - 2025-08-05

### Added
- Spells & prayers section has now improved usability and readability

## [2.1.2] - 2025-08-05

### Fixed
- Custom skills after the 10th will now add their own advance value

## [2.1.1] - 2025-04-30

### Fixed

- Changing a custom skill characteristic's base now displays the right output.
- Change Hardy talent in Wounds section from a checkbox to an input for users buying multiple levels of the talent.

## [2.1.0] - 2025-04-10

### Added

- Support of Polish language

## [2.0.0] - 2025-02-09

### Add

- Highlights on talents

### Chore

- Upgrade dependencies (11ty, Playwright, etc)
- Fix vulnerabilities
- Refactor skill collection by locale

## [1.4.1] - 2025-02-08

### Fixed

- Change export data method to a more reliable one

## [1.4.0] - 2025-02-08

### Added

- Support of Russian language

## [1.3.0] - 2024-04-06

### Added

- Add highlighted support for characteristics

### Fixed

- Boolean value couldn't be updated in localStorage

## [1.2.2] - 2023-07-24

### Fixed

- Add "Ogre" & "Gnome" options to species select
- Updating charac value will now update skills final value
- Custom skill augmentation input is now of type "number"

## [1.2.1] - 2023-03-08

### Fixed

- Inputting alpha characters in type number inputs now shows invalid state

## [1.2.0] - 2023-03-07

### Added

- Improved accessiblity
- Delete button on rows in custom data tables

## [1.1.2] - 2023-03-02

### Fixed

- Improved accessiblity

## [1.1.1] - 2023-02-28

### Fixed

- Fixed home page tabs not working properly
- Fixed Wounds value not properly updating when selecting "halfling"
- Fixed custom skills table not adding new rows when typing in the last row of the table
- Fixed import messages wrongly displaying success message when the JSON parsing failed.

## [1.1.0] - 2023-02-26

### Added

- Reorder basic skills by alphabetic order according to the current used language
- Versioning section in the settings modal

## [1.0.0] - 2023-02-22

### Added

- Initial release 🎉
- Auto-filled fields
- Auto-calculated final values (initial + advances)
- Responsive layout
- Dark mode
- Highlight career skills
- Import/Export data
- Internationalisation (EN/FR)
