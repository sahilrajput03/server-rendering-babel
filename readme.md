# Readme

Source: https://stackoverflow.com/a/43111885/10012446

Run below command:

```
npx babel a.js -d target/
node target/a.js
```

## Other resources:

- https://reactjs.org/docs/react-dom-server.html

**Developing for rendering react component on the server:**

From `package.json` file:

```json
"babel:watch": "babel -w -d target",
"test": "nodemon express/test",
"server": "nodemon express/app"
```

So via command

- `npm run babel:watch C2.js`: We can watch over file `C2.js` and all the jsx in it will be compilerd to javascript.

- `npm run test`: With this command I intend to test out compilerd javascript by simply importing that file in differen file.

- `npm run server`: With this commadn I intend to run express server and return the compiled javascript using some data fetched from database.
