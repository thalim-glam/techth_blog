const router = require('express').Router();
const{User, Blog} = require('../models')
const withAuth = require("../utils/auth")


router.get('/', withAuth, async  (req,res) => {
  console.log('here')
  try {
    const blogData = await Blog.findAll({
      where: {
        userId: req.session.userId,

      }
    })
    const blogs = blogData.map((blog) => blog.get({plain: true}))
    console.log({blogs}) // -----------------------------------------------------
    res.render('all-post-admin',{layout: 'dashboard', blogs})
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
})
router.get('/new', async(req,res) => {
  try {
    res.render('new-post');
  } catch (error) {
    console.error(error)
    res.status(500).json(error);
  }
})

module.exports = router;