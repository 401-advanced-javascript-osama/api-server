const express = require('express');
const app = express();
const timestamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const notFoundHandler = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js');
app.use(express.json());
app.use(timestamp);
app.use(logger);


//***************************(products routs)*******************************\\

let dbproducts = [];

//=========(post methode)=========\\

app.post('/api/v1/products', (req, res) => {
  let { category, name, display_name, description } = req.body;
  let record = { category, name, display_name, description };
  record.id = dbproducts.length + 1;
  dbproducts.push(record);
  res.json(record);
});

//=========(put methode)=========\\

app.put('/api/v1/products/:id', (req, res) => {
  let { category, name, display_name, description } = req.body;
  let record = { category, name, display_name, description };
  const id = req.params.id;
  dbproducts.forEach((val,idx) => {
    if (val.id == id) {
      record.id = id;
      dbproducts[idx] = record;
    }
  });
  res.json(record);
});

//=========(delete methode)=========\\

app.delete('/api/v1/products/:id', (req, res) => {
  const id = req.params.id;
  dbproducts =  dbproducts.filter((val) => {
    return  (val.id != id) ? true : false;
  });
  res.json({});
});

//=========(get methode)=========\\

app.get('/api/v1/products', (req, res) => {
  const count = dbproducts.length;
  const result = dbproducts;
  res.json({ count, result });
});

//=========(get by id methode)=========\\

app.get('/api/v1/products/:id', (req, res) => {
  const id = req.params.id;
  let result;
  dbproducts.forEach(val=>{
    if (val.id == id) {
      result = val;
    }
  });
  res.json( result );
});


//***************************(categories routs)*******************************\\
let dbcategory = [];

//=========(post methode)=========\\

app.post('/api/v1/categories', (req, res) => {
  let { category, name, display_name, description } = req.body;
  let record = { category, name, display_name, description };
  record.id = dbcategory.length + 1;
  dbcategory.push(record);
  res.json(record);
});

//=========(put methode)=========\\

app.put('/api/v1/categories/:id', (req, res) => {
  let { category, name, display_name, description } = req.body;
  let record = { category, name, display_name, description };
  const id = req.params.id;
  dbcategory.forEach((val,idx) => {
    if (val.id == id) {
      record.id = id;
      dbcategory[idx] = record;
    }
  });
  res.json(record);
});

//=========(delete methode)=========\\

app.delete('/api/v1/categories/:id', (req, res) => {
  const id = req.params.id;
  dbcategory =  dbcategory.filter((val) => {
    return  (val.id != id) ? true : false;
  });
  res.json({});
});

//=========(get methode)=========\\

app.get('/api/v1/categories', (req, res) => {
  const count = dbcategory.length;
  const result = dbcategory;
  res.json({ count, result });
});

//=========(get by id methode)=========\\

app.get('/api/v1/categories/:id', (req, res) => {
  const id = req.params.id;
  let result;
  dbcategory.forEach(val=>{
    if (val.id == id) {
      result = val;
    }
  });
  res.json( result );
});

app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`),
    );
  },
};