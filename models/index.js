const User = require('./User');
const Blog = require('./Blog');

Blog.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})






module.exports = {User, Blog};