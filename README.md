markdown
Kodu kopyala

# NoteAPP Project

This is a NoteAPP project. Follow the instructions below to set up and run the project.

## [Live](https://note-app-mern-nu.vercel.app)

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/burakkrt/noteApp---MERN.git
cd noteApp---MERN
```

1.1 Create server

While in the home directory, log in to the server folder from the terminal and make customized connections by following the steps below. Then run your server.

```bash
cd server
```

Install the dependencies:

```bash
npm install
```

Create a .env file in the root directory of the project and add the following environment variables:

.env file

```bash
PORT=4000
MONGO_URI='your_mongodb_uri'
SECRET_KEY='your_secret_key'
```

Replace 'your_mongodb_uri' and 'your_secret_key' with your actual MongoDB URI and secret key.

For example:

```bash
PORT=4000
MONGO_URI='mongodb+srv://<username>:<password>@clustermern.lczt80v.mongodb.net/notDB?retryWrites=true&w=majority&appName=ClusterMern'
SECRET_KEY='mern-first-app'
```

Running the Project
To start the project, run:

```bash
npm run dev
```

The server will start on the port specified in the .env file. By default, it will be http://localhost:4000.

Environment Variables

- PORT: The port number the server will run on. Default is 4000.
- MONGO_URI: The connection string for your MongoDB database.
- SECRET_KEY: A secret key used for various purposes such as signing tokens.

  1.2 Create client

While in the home directory, log in to the client folder from the terminal.

```bash
cd client
```

If you are still in the server directory, go back and move to the client folder.

```bash
cd..
cd client
```

Install the dependencies:

```bash
npm install
```

Running the Project
To start the project, run:

```bash
npm run dev
```

The client will start on the port specified in the viteiconfig.js file. By default it will be http://localhost:3000.

## Contributing

If you want to contribute to this project, please follow the guidelines in CONTRIBUTING.md.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any questions or feedback, feel free to open an issue or contact me at krtburak@outlook.com.
