import express, { Application } from 'express';
import path from 'path';
import axios from 'axios';
import { AppHttpResponse } from './shared';

/**
 * A singleton instance of express application that will be used to setup our express server.
 *
 * It's important to not use any other instances of express application other than this instance.
 */
const app: Application = express();

/**
 * Specify views folder and template engine.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Gets and create QR code by id.
 */
app.get('/qr/:id', async (req, res) => {
  const id = req.params.id;
  res.render('QR', {
    url: `http://localhost:3001/data/${id}`,
  });
});

/**
 * Read QR code by id.
 * send a url and can run in browser to see data
 */
app.get('/data/:id', async (req, res) => {
  const id = req.params.id;
  const result = await axios.get<AppHttpResponse>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  res.render('profile', {
    data: result.data,
  });
});

/**
 * Starts an express server.
 * @param app The express application to start its express server.
 */
function startServer(app: Application): void {
  const port = process.env.PORT || 3001;

  app.listen(port, () => console.log(`server run ${port}`));
}
/**
 * Start express server after all are done.
 */

startServer(app);
