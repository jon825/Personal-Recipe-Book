const router = require('express').Router();
const {Recipe} = require('../models');

let attributes;
Recipe.where({})
    .fetch()
    .then(recipe => {
        attributes = Object.keys(recipe.attributes);
    })

router.get('/', (req, res) => {
    const where = {};
    for (let key in req.query) {
        if (attributes.includes(key)) {
            where[key] = req.query[key];
        }
    }
    Recipe.where(where)
        .fetchAll({})
        .then(recipes => {
            res.json(recipes)
        })
        .catch(e => {
            console.log(e)
            res.status(500).send(e);
        })
});

router.post('/update',(req, res) => {
  const newRecipe = {};
  for(let key in req.body){
    if(attributes.includes(key)){
      newRecipe[key] = req.body[key];
    }
  }
  new Recipe(newRecipe)
    .save()
    .then(recipe =>{
      res.json(recipe.attributes);
    })
    .catch(e =>{
      res.status(500).send(e)
    })
})


//need to figure out how to delete selected row from database;
router.delete('/:id', (req,res)=>{
  Recipe.where({id: req.params.id})
    .destroy()
    .then(recipe=>{
      console.log(recipe.attributes)

      res.json(recipe.attributes);
    })
    .catch(e =>{
      res.status(500).send(e)
    })


})

module.exports = router;
