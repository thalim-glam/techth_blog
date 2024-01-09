const router = require('express').Router();

const { Blog } = require('../../models');

router.post('/', async (req,res) => {
  const body = req.body

  try {
    const newBlogPost = await Blog.create({...body, userId: req.session.userId})
    res.json(newBlogPost)
  } catch (error) {
    res.status(500).json(error)
  }
})
module.exports = router;