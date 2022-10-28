import express from 'express'; // Express to run server and routes

import router from './routes/index'; // requiring the router itself

const app = express(); // Start up an instance of app

//server setup & spin
const port = 3000;

app.listen(port, (): void => {
  console.log(`server running on localhost: ${port}`); //to make sure server is running
});

app.use('/', router);

export default app; // for testing
