const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts.js");

const errors = require("./middlewares/errors.js");

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', postsRouter);

app.use('/:slug', postsRouter);

app.use('/create', postsRouter);

app.use(errors);

app.listen(port, () => {
    console.log('Server attivo sulla porta http://localhost:3000.');
});