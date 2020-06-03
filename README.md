# LAB: Express
we’ll be using a moving away from json-server and creating a “real” API server of our own, using Express. Our express server will be coded for modularity and performance. You will replicate the input/output of json-server but storing data in memory to simulate full CRUD functionality, but without persistence.
### Author: Osama Mousa
### Links and Resources
- [submission PR class-08](https://github.com/401-advanced-javascript-osama/api-server/pull/3)
### Documentation

* [swagger](https://app.swaggerhub.com/apis/osamamousa204/mongo-api/0.1)

### Modules
#### `Node.js` , `Postman` , `Swagger` , `HTTPie` , `curl`
### Packages
#### `express` , `jest` , `supertest`
#### How to initialize/run your application
- GET ALL: GET - http://localhost:3030/api/v1/categories
- GET ONE: GET - http://localhost:3030/api/v1/categories/1
- UPDATE ONE:  PUT - http://localhost:3030/api/v1/categories/1
- DELETE ONE: DELETE - http://localhost:3030/api/v1/categories/1
- GET ALL: GET - http://localhost:3030/api/v1/products
- GET ONE: GET - http://localhost:3030/api/v1/products/1
- UPDATE ONE:   PUT - http://localhost:3030/api/v1/products/1
- DELETE ONE: DELETE - http://localhost:3030/api/v1/products/1
#### Tests
- Test: `node index.js` / `nodemon` / `npm test` / `npm run lint`
#### UML
![UML-Diagram](./uml/mongo2.png)