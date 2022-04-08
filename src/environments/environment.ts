// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrl: 'http://localhost:4200',
  firebaseConfig: {
    apiKey: "AIzaSyBclD7ToBOL0i9mvkJArAJwXiNHaEWSxgU",
    authDomain: "chess-online-game.firebaseapp.com",
    databaseURL: "https://chess-online-game-default-rtdb.firebaseio.com",
    projectId: "chess-online-game",
    storageBucket: "chess-online-game.appspot.com",
    messagingSenderId: "246728743379",
    appId: "1:246728743379:web:4c516ab4a300dc4665f726"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
