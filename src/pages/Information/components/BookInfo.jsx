import React, { useState } from "react";
import ModalAlert from "../../../components/Modal/Modal";
import BookDetail from "./BookDetail";
import BookPreview from "./BookPreview";

const BookInfo = (props) => {
  const { book } = props;

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const coomingSoon = () => {
    setOpen(true);
  };

  return (
    <main className="grid grid-cols-3 gap-4 md:pt-4">
      <div className=" md:col-span-2 col-span-3 bg-white rounded-2xl px-6 py-4 flex flex-col">
        <h2 className="md:text-5xl text-3xl mb-4 text-center">{book.name}</h2>
        <BookDetail coomingSoon={coomingSoon} book={book} />
      </div>
      <div className=" md:col-span-1 col-span-3 overflow-auto flex justify-center rounded-2xl">
        <BookPreview book={book} />
      </div>
      <ModalAlert open={open} handleClose={handleClose}>
        <h2 className="text-lg text-gray-400 text-center">
          available on version 2.0.0
        </h2>
      </ModalAlert>
    </main>
  );
};

export default BookInfo;
