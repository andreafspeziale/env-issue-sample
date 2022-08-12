# ENV issue sample

## TL;DR

- `npm i`
- `npm run test` (success)
- `export ENV_WITH_ISSUE=1.006371740188e+12`
- `npm run test` (fail)

## How to reproduce the issue

- `npm i`
- `cp ./env/env.development .env`
- `npm run start:dev`

=> Go to the browser and hit the `http://localhost:3000`

You should be able to see printed `1006371740188` in the browser.

Now you are ready to reproduce the issue by:

- removing from `.env` file the `ENV_WITH_ISSUE` env variable
  - this is not 100% necessary since terminal exported env vars > `.env` contained env vars
- exporting the variable using your terminal
  - `export ENV_WITH_ISSUE=1.006371740188e+12`
- `npm run start:dev`

Hitting again from the browser `http://localhost:3000` you will see that now `1` is printed instead.

It seems that there is some convertion which is happening if the env var is in the `.env` file and it is not happening if the env var is exported like it would be deployed in a remote env.

The behaviour is not consistent and it can be a significant issue in case of `production` env.
