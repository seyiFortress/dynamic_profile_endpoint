# dynamic_profile_endpoint

A simple RESTful API endpoint was built that returns my profile information along with a dynamic cat fact fetched from an external API.

This task validates my ability to consume third-party APIs, format JSON responses, and return dynamic data.

<!-- Commands to run locally (PowerShell): -->

npm install // Install dependencies

npm run json-server // Start only the JSON data server (serves db.json at http://localhost:4001)

npm run dev

# This runs: nodemon server/index.js

# Or run in production mode:

npm start

# This runs: node server/index.js

<!-- Start both concurrently (recommended for dev): -->

npm run start:all

# This uses concurrently to run json-server and nodemon together

<!-- Verify the endpoint: -->

JSON server user resource: http://localhost:4001/user/1
Combined API endpoint: http://localhost:7000/api/me (default PORT set in code or via env — see below)

<!-- Dependencies (from package.json): -->

npm install

# or, to install production deps only (recommended):

npm install --omit=dev

# In CI (faster, reproducible):

npm ci --omit=dev

You can also run the repository's helper script:

```powershell
npm run install:prod
```

<!-- Environment variables: -->

JSON_SERVER_URL=http://localhost:4001/user/1
PORT=4000 // Example .env (copy into the repo root)

<!-- Dependencies used (from package.json) -->

Runtime dependencies:
axios — HTTP client used to fetch the external cat fact in getUserProfile.
cors — enabled in app.
express — the web framework used by app and started in index.js.

Dev / tooling dependencies:
dotenv — loaded via import "dotenv/config" in express.js to read environment variables from .env.
nodemon — used for development (npm run dev).

<!-- How to install -->

Installing everything listed in package.json:
npm install

To install dependencies individually:
npm install axios cors expressnpm install --save-dev dotenv nodemon

To connect your Express server to the local JSON Server database:
npm install --save-dev json-server concurrently

Environment variables:
The project expects a PORT variable (see .env and import "dotenv/config" in server/express.js).

Example .env content in this workspace:
PORT=4000
The server reads the port in index.js:
If $PORT is set, the app listens on that port; otherwise it defaults to 7000.
