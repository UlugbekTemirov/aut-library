import React from "react";
import BookDetail from "./BookDetail";
import BookPreview from "./BookPreview";

const BookInfo = (props) => {
  const { book } = props;
  return (
    <section className="grid grid-cols-3 gap-4 md:pt-4">
      <div className=" md:col-span-2 col-span-3 bg-white rounded-2xl px-6 py-4">
        <BookDetail book={book} />
      </div>
      <div className=" md:col-span-1 col-span-3 overflow-auto flex justify-center rounded-2xl">
        <BookPreview book={book} />
      </div>
    </section>
  );
};

export default BookInfo;