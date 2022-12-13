import React from "react";

const BookDetail = (props) => {
  const { book } = props;
  console.log(book);
  return (
    <main>
      <h2 className="text-4xl text-center">{book.name}</h2>
      <h2 className="text-xl">{book.author}</h2>
      <h2>{book.year}-yil</h2>
      <h2>{book.pages} bet</h2>
      <h2>{book.amount}</h2>
      <h2>{book.cd_disk ? "bor" : "yoq"}</h2>
      <h2>{book.get_options}</h2>
      <h2>{book.price}</h2>
      <h2>{book.lang}</h2>
    </main>
  );
};

export default BookDetail;
