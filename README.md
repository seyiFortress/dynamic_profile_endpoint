# dynamic_profile_endpoint

A simple RESTful API endpoint was built that returns my profile information along with a dynamic cat fact fetched from an external API.

This task validates my ability to consume third-party APIs, format JSON responses, and return dynamic data.

<!-- Steps to run the project locally (Windows):

Install Node.js (recommended v18+).
Open a terminal in the project root: c:\Users\DELL\Projects\Dynamic_Profile_Endpoint
Install dependencies: -->

npm install

<!-- Install tools used by scripts (if not installed globally). From project root run: -->

npm install --save-dev json-server concurrently

<!-- (Optional) Add a combined-dev script so both servers run together — modify package.json scripts to include dev:all. Example change: -->

// ...existing code...
{  
"scripts": {
"start": "node server/index.js",
"dev": "nodemon server/index.js","json-server": "json-server --watch data/db.json --port 4001","dev:all": "concurrently \"npm:dev\" \"npm:json-server\""
}
}
// ...existing code...

<!-- Create a .env if you need to set PORT or other environment variables. Example .env: -->

PORT=7000

<!-- Run servers:
Start just the app (development): -->

npm run dev

<!-- Start just json-server: -->

npm run json-server

<!-- Start both (after adding dev:all or using npx): -->

npm run dev:all
# or without installing concurrently:
npx concurrently "npm:dev" "npm:json-server"

<!-- Production start: -->

npm start

<!-- Notes:

json-server must be installed (local devDependency or global) for npm run json-server to work.
Because package.json has "type": "module", your server uses ESM imports (import/export). -->

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

<!-- ** How to run it locally ** -->

Development (auto-reload with nodemon):
npm start dev:all
