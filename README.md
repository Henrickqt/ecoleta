# Ecoleta

Project for ecological purposes, serving as a map (connection) between companies/entities that collect organic/inorganic waste and people who need to dispose of this waste.

This project uses Node.js, ReactJS, ReactNative and TypeScript, and it was developed during the NLW #1 of the [RocketSeat](https://rocketseat.com.br/) team.

!img ......................

## Server (Backend)

This API REST was created using the following technologies:
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Knex.js](http://knexjs.org/)
- [SQLite](https://www.npmjs.com/package/sqlite3)
- [Cors](https://www.npmjs.com/package/cors)
- [Multer](https://www.npmjs.com/package/multer)
- [Celebrate](https://github.com/arb/celebrate)

### Run
Run `npm run dev` to start the server, alias for `npx ts-node-dev src/server.ts`.

### Running Migrations
Run `npm knex:migrate` to run the migrations, alias for `npx knex --knexfile knexfile.ts migrate:latest`.

### Running Seeds
Run `knex:seed` to run the seeds, alias for `npx knex --knexfile knexfile.ts seed:run`.

## Web (Frontend)

This Web App was created using the following technologies/libraries:
- [ReactJS](https://reactjs.org/)
- [React Icons](https://github.com/react-icons/react-icons)
- [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)
- [Leaflet](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [IBGE Locations API](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1)
- [Axios](https://github.com/axios/axios)
- [React Dropzone](https://github.com/react-dropzone/react-dropzone)

### Run
Run `npm start` to start the Web App, then navigate to `http://localhost:3000`.

## Mobile (Frontend)

This Mobile App was created using the following technologies/libraries:
- [React-Native](https://reactnative.dev/)
- [Expo-CLI](https://docs.expo.io/workflow/expo-cli/)
- [Google Fonts](https://github.com/expo/google-fonts)
- [React-Navigation](https://reactnavigation.org/)
- [React-Native-Maps](https://github.com/react-native-community/react-native-maps)
- [React-Native-SVG](https://github.com/react-native-community/react-native-svg)
- [Axios](https://github.com/axios/axios)
- [Expo-Location](https://docs.expo.io/versions/latest/sdk/location/)
- [Expo-Mail-Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)

### Run
Run `npm start` to start the Metro Bundler. To run the App, you can download the Expo App from PlayStore/AppStore in your smartphone. After that, scan the QR-Code in your smartphone.
Remembering that your smartphone needs to be in the same network as your computer that is running the Metro Bundler.
