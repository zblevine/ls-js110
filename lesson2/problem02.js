/*
PE: want to sort these by publish date, smallest to largest
DA:
sort by publish date with compare function
compare publish date:
  -compares two objects
  -looks at publish date of each object
  -increasing order
*/

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

function publishDateCompare(a, b) {
  return Number(a.published) - Number(b.published);
}

console.log(books.sort(publishDateCompare));