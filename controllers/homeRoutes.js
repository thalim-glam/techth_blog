//Creating home routes for authentication
const router = require('express').Router();
const { Category, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    // const dbCategoryData = await Category.findAll({
    //   include: [
    //     {
    //       model: Post,
    //       attributes: ['filename', 'description'],
    //     },
    //   ],
    // });

    // const categories = dbCategoryData.map((category) =>
    //   category.get({ plain: true })
    // );

    res.render('homepage');
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
module.exports = router;