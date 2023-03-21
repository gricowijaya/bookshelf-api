## Bookshelf API

This is the repository for Bookshelf API for generating the bookshelf CRUD with the requirement. To test the API just clone this repo and import the Bookshelf API from the `postman/` directory. The default port in this server will be 9000 and the host is localhost.

If you wish to use another port and host please do :

```bash
cp .env.example .env
```

Then edit the `PORT` and `HOST` in the `.env` file in the root folder

To start the server please run:

```bash
npm install
npm run start
```

For develop please run :

```bash
npm run dev
```

The google cloud instance script can be found in `script/` folder
