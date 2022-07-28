// The file contents for the current environment will overwrite these during build2.
// The build2 system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build2 --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  version: require("../../package.json").version, // https://stackoverflow.com/questions/34907682/how-to-display-app-version-in-angular2
  remoteConfig: true,
  remoteConfigUrl: "/widget-config.json",
  loadRemoteTranslations: true,
  remoteTranslationsUrl: "http://localhost:8081/",
  chatEngine: "mqtt",
  uploadEngine: "native",
  fileUploadAccept: "*/*",
  logLevel: "INFO",
  firebaseConfig: {
    apiKey: "CHANGEIT",
    authDomain: "CHANGEIT",
    databaseURL: "CHANGEIT",
    projectId: "CHANGEIT",
    storageBucket: "CHANGEIT",
    messagingSenderId: "CHANGEIT",
    appId: "CHANGEIT",
    tenant: "CHANGEIT",
  },
  chat21Config: {
    appId: "tilechat",
    MQTTendpoint: "ws://localhost:15675/mqws/ws", // MQTT endpoint
    APIendpoint: "http://localhost:8081/api",
  },
  apiUrl: "http://localhost:8081/",
  baseImageUrl: "http://localhost:8081/",
  defaultLang: "en",
  storage_prefix: "widget_sv5",
  authPersistence: "LOCAL",
  supportMode: true,
};
