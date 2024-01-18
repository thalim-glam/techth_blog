//Creating home routes for authentication
const router = require('express').Router();
const { Category, Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
const blogData = await Blog.findAll({
  include:[User]
})
const blogs = blogData.map((blog) => blog.get({plain: true}))

    res.render('all-posts', {blogs});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get for one post based on id
// If the user is logged in, they can see the post data
router.get('/post/:id', async (req, res) => {
  try {

    const dbPostData = await Post.findByPk(
      req.params.id
    );
    const post = dbPostData.get({ plain: true });

  } catch (error) {
    console.log(error);
    res.status(500).json(err);
  }
});

// login information
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/dashboard', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('homepage',{layout: 'dashboard'});
});

module.exports = router;