import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const books = [
{
  id:1,
  author: 'Karen McQuestion',
  title: 'The Moonlight Child ',
  img:'https://images-na.ssl-images-amazon.com/images/I/81KhmVUmrVL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL160_SR160,160_.jpg'
},


{
  id:2,
  author: 'T L Swan ',
  title: 'The Casanova (The Miles High Club Book 3) ',
  img:'https://images-na.ssl-images-amazon.com/images/I/71crgapR-eS._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL160_SR160,160_.jpg'

},

{
  id:3,
  author: 'Colleen Hoover ',
  title: 'Verity ',
  img:'https://images-na.ssl-images-amazon.com/images/I/911BI3unxzL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL160_SR160,160_.jpg'

},
];

function BookList() {
  return (
    <section className="booklist">
   {books.map((book)=> {
        /* const {img, title, author} = book; */
        return (
         <Book key={book.id} {...book}></Book>

        )
   })}
    </section>
  );
};

  const   Book = ({img, title, author})=>{
    /* const {img,title,author} = props */
  return(
    <article className="book">
     <img src={img} alt=''/> 
      <h1>{title}</h1>
      <h4>{author}</h4>          
    </article>
  )
};
ReactDOM.render(  
   <BookList/>, 
  document.getElementById('root')
);

