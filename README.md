# NcCountdownGaneshApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

`Run ng build` to build the project. The build artifacts will be stored in the `dist/` directory. The production version of the app does not work as generated. To make it work, you need to remove the `media` and `onload` properties from the `<link>` element in the root HTML file.

`<link
      rel="stylesheet"
      href="styles.<HASH>.css"
      media="print"
      onload="this.media='all'"
    />`

## Deployment

The production version of the app is deployed in Netlify and can be accessed through the following URL

https://nc-countdown-app-ganesh.netlify.app

## App improvements

- Using a button to submit the form instead of keydown
- Making use of more user-friendly date pickers to select date and time
- Displaying error messages for certain use cases through toasts or banners instead of alerts
