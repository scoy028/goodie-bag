const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isNull: false
    }
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true,
      isNull: false
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://target.scene7.com/is/image/Target/GUEST_9766bfa7-3fcb-4f4c-9576-15e17ccc1044?wid=488&hei=488&fmt=pjpeg',
    validate: {
      isUrl: true
    }
  }
});

module.exports = Candy
