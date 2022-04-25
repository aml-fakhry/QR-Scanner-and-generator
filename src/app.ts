import express, { Application } from 'express';
import path from 'path';
import axios from 'axios';

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
  try {
    const id = req.params.id;
    res.render('generate_qr', {
      url: `http://localhost:3001/data/${id}`,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * Read QR code by id.
 * send a url and can run in browser to see data
 */
app.get('/data/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await axios.get<{ data: unknown }>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    res.render('read_qr', {
      data: result.data,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * Starts an express server.
 * @param app The express application to start its express server.
 */
function startServer(app: Application): void {
  const port = process.env.PORT || 3001;

  app.listen(port, () => console.log(`Server is running now at http://localhost:${port}`));
}
/**
 * Start express server after all are done.
 */

startServer(app);
