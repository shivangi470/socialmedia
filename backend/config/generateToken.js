const jwt = require('jsonwebtoken');
require('dotenv').config();

console.log('JWT_SECRET:', process.env.JWT_SECRET); // Debugging line

const generateToken = (id) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = generateToken;
