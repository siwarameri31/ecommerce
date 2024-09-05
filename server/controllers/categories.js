const { Category } = require('../models/index');

module.exports = {
  getAllCategories: async function (req, res) {
    try {
      
      const category = await Category.findAll()
   
      res.status(200).send(category)
      
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
  },
  postCategory : async function (req, res) {
    const newCategory = req.body
  
    
    try {
      const category = await Category.create( newCategory);
      res.status(201).send(category)
    } catch (error) {
      console.error( error)
      res.status(500).send('Internal server error')
    }
  }
  

, 
  deleteCategories: async function (req, res) {
    try {
      const { id } = req.params;
      const deleted = await Category.destroy({ where: { id } });
      if (deleted) {
        res.status(200).send('Category deleted successfully')
      } else {
        res.status(404).send(' Category not found')
      }
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
  },

  updateCategories: async function (req, res) {
    try {
      const { id } = req.params;
      const [updated] = await Category.update(req.body, { where: { id } });
      if (updated) {
        const updatedCategory = await Category.findByPk(id);
        res.status(200).send(updatedCategory);
      } else {
        res.status(404).send('Category not found');
      }
    } catch (error) {
      console.error(error);
   
    }
  }
};
