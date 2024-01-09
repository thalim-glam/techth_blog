const router = require('express').Router();
const{User, Blog} = require('../models')
router.get('/', async (req,res) => {
  try {
    const blogData = await Blog.findAll({
      where: {
        userId: req.session.userId,

      }
    })
    const blogs = blogData.map((blog) => blog.get({plain: true}))
    res.render('all-post-admin',{layout: 'dashboard', blogs})
  } catch (error) {
    res.status(500).json(error)
  }
})
router.get('/new', async(req,res) => {
  try {
    res.render('new-post');
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;