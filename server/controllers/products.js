const { Product } = require('../models/index');

module.exports = {
  getAllProducts: async function (req, res) {
    try {
      
      const product = await Product.findAll()
   
      res.status(200).send(product)
      
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
  },

  getOne: async function (req, res) {
    try {
      const {id} = req.params
      const oneproduct = await Product.findOne({where : {id : id}})
   
      res.status(200).send(oneproduct)
      
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
  },

  postProducts: async function (req, res) {
    const newProduct = req.body
  
    
    try {
      const product = await Product.create( newProduct );
      res.status(201).send(product)
    } catch (error) {
      console.error( error)
      res.status(500).send('Internal server error')
    }
  }
  

, 
  deleteProducts: async function (req, res) {
    try {
      const { id } = req.params;
      const deleted = await Product.destroy({ where: { id } });
      if (deleted) {
        res.status(200).send('Product deleted successfully')
      } else {
        res.status(404).send('Cow not found')
      }
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
  },

  updateProducts: async function (req, res) {
    try {
      const { id } = req.params;
      const [updated] = await Product.update(req.body, { where: { id } });
      if (updated) {
        const updatedProduct = await Product.findByPk(id);
        res.status(200).send(updatedProduct);
      } else {
        res.status(404).send('Product not found');
      }
    } catch (error) {
      console.error(error);
   
    }
  }
};
