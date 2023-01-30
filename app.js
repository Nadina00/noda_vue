const express = require('express');
const app = express();
const usersRouter = require("./routers/index")
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!');
  });


  app.use('/users', usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
  
  app.listen(3030, () => {
    console.log('Example app listening on port 3000!');
  });