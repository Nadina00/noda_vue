const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    const payload = {
        id: user.id,
        userEmail: user.email,
      };
      const token = jwt.sign(payload, secret, { expiresIn: "1h" });

    res.render('response', { title: 'Simple express app', email, password });
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
          email,
          token,
          message: "Login successful",
        },
      });
  });

  router.post('/register', (req, res, next) => {
    const { userName, email } = req.body;

    res.status(201).json({
        status: "success",
        code: 201,
        data: {
          email,
          userName,
          message: "Registration successful",
        },
      });
    });




  module.exports = router;