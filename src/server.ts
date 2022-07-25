import express from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  app.get("/filteredimage/", async (req, res) => {

    const image_url: string = req.query.image_url as string;

    if (!image_url) {
      return res.status(400).send("Image URL is required");
    }

    filterImageFromURL(image_url).then((path) => {
      res.status(200).sendFile(path, () => { deleteLocalFiles([path]) });
    }).catch((error) => {
      console.error(error);
      res.status(422).send("Request is unprocessable!");
    })
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req, res) => {
    res.status(200).send("try GET /filteredimage?image_url={{}}");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
