Exercise 1: The book list

I'd like to display my three favorite books inside a nice webpage!

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
];
Iterate through the array of books.
For each book, create a <p> element with the book title and author and append it to the page.
Use a <ul> and <li> to display the books.
Add an <img> to each book that links to a URL of the book cover.
Change the style of the book depending on whether you have read it (green) or not (red).