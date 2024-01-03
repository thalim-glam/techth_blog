const router = require('express').Router();

const {User} = require('../../models')

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      password: req.body.password
    })
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.name = newUser.name;
      req.session.loggedIn = true;
      console.log(newUser);
      res.json(newUser);
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {name: req.body.name }
    })
    const validatePassword = user.checkPassword(req.body.password);
    if(!validatePassword){
      res.status(400).json({message: "Invalid Password"});
    }
      req.session.save(() => {
      req.session.userId = user.id;
      req.session.name = user.name;
      req.session.loggedIn = true;
      console.log(user);
      res.json({message: "You are logged in!"});
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json(err);
  }
})

router.get('/all', async (req, res) => {
try {
  const allUsers = await User.findAll()
  res.json(allUsers);
} catch (error) {
  console.log(error);
  res.status(500).json(err);
}
})

router.post('/logout', (req, res) => {
  if(req.session.loggedIn){
req.session.destroy(() => {
  res.status(204).end();
})
  }else{
    res.status(404).end();
  }
})

module.exports = router;