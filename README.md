# Example: Express App With User Authentication

## Contents <!-- omit in toc -->

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Heroku](#heroku)
  - [Creating A New App](#creating-a-new-app)

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

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Creating A New App

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

1
