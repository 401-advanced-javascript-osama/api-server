const express = require('express');
const categories = require('../models/categories/categories-model.js');
const router = express.Router();


//*************************(Routs)*************************\\

router.get('/categories', getCategoriesHandler);

router.get('/categories/:id', getByIdCategoriesHandler);

router.post('/categories', postCategoriesHandler);

router.put('/categories/:id', updateByIdCategoriesHandler);

router.delete('/categories/:id', deleteByIdCategoriesHandler);

//********************(Routs Handlers)**********************\\

//========(get Categories Handler)========\\

async function getCategoriesHandler(req,res,next){
  try {
    const data = await categories.get();
    const count = data.length;
    const result = data;
    res.json({count,result});
  } catch (error) {
    next(error.message);
  }

}

//========(get by id Categories Handler)========\\

async function getByIdCategoriesHandler(req,res,next){
  const id = req.params.id;
  try {
    const data = await categories.get(id);
    res.json(data);
  } catch (error) {
    next(error.message);
  }
  
}

//========(post Categories Handler)========\\

async function postCategoriesHandler(req,res,next){
  try {
    const data = await categories.create(req.body);
    res.json(data);
  } catch (error) {
    next(error.message);
  }

}

//========(update Categories Handler)========\\

async function updateByIdCategoriesHandler(req,res,next){
  const id = req.params.id;
  try {
    const data = await categories.update(id,req.body);
    res.json(data);
  } catch (error) {
    next(error.message);
  }
    
}

//========(delete by id Categories Handler)========\\

async function deleteByIdCategoriesHandler(req,res,next){
  const id = req.params.id;
  try {
    await categories.delete(id);
    res.json({});
  } catch (error) {
    next(error.message);
  }
}

module.exports = router;