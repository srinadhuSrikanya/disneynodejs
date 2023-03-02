const book ={
    title: 'ego is the enemy',
    author:'ryan holiday'
}
const bookJSON=JSON.stringify(book)
console.log(bookJSON)
const parseddate=JSON.parse(bookJSON)
console.log(parseddate.author)