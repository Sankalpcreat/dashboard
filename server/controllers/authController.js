const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ f_username: name, f_pwd: password });

    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expressIn: '1h',
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
