# Example: Express App With User Authentication

## Contents <!-- omit in toc -->

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Heroku](#heroku)
  - [Creating A New App On Heroku](#creating-a-new-app-on-heroku)
  - [Deploying To Heroku](#deploying-to-heroku)
- [Project Structure](#project-structure)

## Requirements

This example requires Node.js and a local PostgreSQL database.

## Getting Started

1. Fork and/or clone this repository
1. To install the required dependencies, run:

   ```console
   npm install
   ```

1. To create the local database and migrate to the latest schema, run:

   ```console
   npm run db:setup
   ```

1. To start the application in development, run

   ```console
   npm run dev
   ```

## Heroku

This example is ready to deploy to Heroku out of the box, but you'll have to create your own application. Make sure to run the migrations after deploying for the first time (or if you ever create new migrations).

### Creating A New App On Heroku

1. If necessary, log into Heroku with:

   ```console
   heroku login
   ```

1. Create a new Heroku app with:

   ```console
   heroku create name-of-your-application
   ```

1. Add PostgreSQL to your Heroku instance:

   ```console
   heroku addons:create heroku-postgresql:hobby-dev
   ```

### Deploying To Heroku

1. Deploy to Heroku with:

   ```console
   git push heroku
   ```

1. Migrate the Heroku's PostgreSQL database to the latest schema with:

   ```console
   heroku run npm run db:migrate
   ```

1. Open the Heroku app in your browser with:

   ```console
   heroku open
   ```

## Project Structure

- `models/` contains files for interacting with specific database tables
  - `models/User.js` contains functions for interacting with Users, e.g., finding, creating, authenticating, etc.
- `routes/` contains files for handling incoming requests
  - `routes/index.js` contains all the sign-up related routes
- `lib/` contains miscellaneous helpers and other files
  - `lib/database.js` loads the database configuration and exports a Knex client
  - `lib/sessionHandler.js` contains Express middleware that allows session data to be stored securely in cookies
  - `lib/loadUser.js` contains Express middlware that checks to see if the current session has a user associated with it and, if so, adds a `request.user` object
