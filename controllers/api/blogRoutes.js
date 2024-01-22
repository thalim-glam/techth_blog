const router = require('express').Router();
const { User, Blog } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newPost = await Blog.create({
      name: name,
      description: description,
      userId: req.session.userId
    });
    console.log({ newPost, message: "New post" })
    res.status(200).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Blog.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/allposts', async (req, res) => {
  try {
    const blogs = await Blog.findAll()
    res.json(blogs);

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

module.exports = router;