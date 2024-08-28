# NcCountdownGaneshApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Getting started

- Clone the repo to the local
- Enter the directory
- Npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

`Run ng build` to build the project. The build artifacts will be stored in the `dist/` directory. The production version of the app doesn't render style files after its built so. To render the styles correctly, you need to

- add ` "optimization": {
        "styles": {
          "inlineCritical": false
        }
      }`
  to `angular.json`file in the root

- remove the `media` and `onload` properties from the `<link>` element in the root HTML file.
  `<link
  rel="stylesheet"
  href="styles.<HASH>.css"
  media="print"
  onload="this.media='all'"
/>`

## Deployment

The production version of the app is deployed in Netlify and can be accessed through the following URL

<a href="https://nc-countdown-app-ganesh.netlify.app">View Demo</a>

## License

Distributed under the MIT License. See LICENSE.txt for more information.

## App improvements

- Using a button to submit the form instead of keydown
- Making use of more user-friendly date pickers to select date and time
- Displaying error messages for certain use cases through toasts or banners instead of alerts
- Create a date-time picker wheel that provides consistent styling and behavior across all operating systems and browsers. The current picker relies on the native implementation, which can vary between different OS and browsers.
