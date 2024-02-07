# REST API

## Getting Started
Ensure Node.js is installed on your machine. If not, download and install it from [Node.js](https://nodejs.org/en/).

### Install Dependencies
- Install all npm packages
```bash
npm install
```

### Create .env file
- Create a `.env` file in the root of the project and add the following environment variables
```env
PORT=8000 # Optional, default is 3000
MONGO_URI=mongodb://localhost:27017/warming-shelter
```

### Start the server using one of the following commands
- Start the server in production mode
```bash
npm start
```

- Start the server in development mode, which will restart the server on file changes
```bash
npm run dev
```