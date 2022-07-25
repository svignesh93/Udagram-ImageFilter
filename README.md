# Udagram Image Filtering Microservice

Udagram is a simple cloud application that allows users to process photos using an image filtering microservice.

1. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code) - It is a Node-Express application which runs a simple script to process images.

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Endpoints in the server.ts file

The endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

It uses a few helper functions to handle some of these concepts and has been imported for you at the top of the `./src/server.ts`  file.

```typescript
import {filterImageFromURL, deleteLocalFiles} from './util/util';
```

### Deploying your system

Follow the process to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

### APIs:

1) The root endpoint just displays a string that wants you to try the `GET /filteredimage?image_url={{URL}}` endpoint.

#### Running the development server by `npm run dev`:

```
GET http://localhost:8082
```

#### Running an application deployed in elastic beanstalk:

```
http://udagram-imagefilter-dev.us-east-2.elasticbeanstalk.com
```

2) Downloads an image from the given public URL, applies filter and return the result.

```
GET /filteredimage?image_url={{URL}}
```

## License

[License](LICENSE.md)
