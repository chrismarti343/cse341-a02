const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const books = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.render('a02', {
    pageTitle: 'List of books',
    
    books: books
 });
 console.log(books);
 
  
});

app.get('/add-book', (req, res, next) => {
    res.render('index', { pageTitle: 'Add books' });

});

app.post('/add-book', (req, res, next) => {
    books.push({ name: req.body.bookname, label: req.body.bookname2 });
    res.redirect('/');
});


app.listen(port);

