'use strict';

import Ebook from './ebook.js';
import PrintedBook from './printedbook.js';

const ebook = new Ebook('Ultimate Spider-Man', 'Marvel Comics', 2000, 243);
console.log(ebook);
console.log(ebook.info);
console.log(ebook.getDescription());

const printedBook = new PrintedBook(
    'The Little Book of Spider-Man',
    'Roy Thomas',
    2017,
    192
);

console.log(printedBook);
console.log(printedBook.info);
console.log(printedBook.getDescription());
