# NoteAPP Project

This is a NoteAPP project. Follow the instructions below to set up and run the project.

## [Live](https://note-app-mern-nu.vercel.app)

## Technologies

### Frontend (Client)

- [classnames - v2.5.1](https://www.npmjs.com/package/classnames)
- [react - v18.2.0](https://reactjs.org/)
- [react-helmet - v6.1.0](https://www.npmjs.com/package/react-helmet)
- [react-hot-toast - v2.4.1](https://react-hot-toast.com/)
- [react-icons - v5.2.1](https://react-icons.github.io/react-icons/)
- [react-loading - v2.0.3](https://www.npmjs.com/package/react-loading)
- [react-router-dom - v6.23.1](https://reactrouter.com/)
- [eslint - v8.57.0](https://eslint.org/)
- [tailwindcss - v3.4.3](https://tailwindcss.com/)
- [vite - v5.2.0](https://vitejs.dev/)

### Backend (Server)

- [bcrypt - v5.1.1](https://www.npmjs.com/package/bcrypt)
- [cors - v2.8.5](https://www.npmjs.com/package/cors)
- [dotenv - v16.4.5](https://www.npmjs.com/package/dotenv)
- [express - v4.19.2](https://expressjs.com/)
- [jsonwebtoken - v9.0.2](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose - v8.4.0](https://mongoosejs.com/)
- [validator - v13.12.0](https://www.npmjs.com/package/validator)
- [prettier - v3.2.5](https://prettier.io/)

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
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_secret_key
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
- SECRET_KEY: A secret key used for various purposes such as signing tokens. You decide what to write here. You can write anything you want.

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

Create a .env file in the root directory of the project and add the following environment variables:

Here we need to enter the URL address where we run our server. Since we are running it at localhost:4000 in our example, we can write this.

.env file

```bash
VITE_API_URL=http://localhost:4000
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
