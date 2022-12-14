import React, { useState } from "react";

// icons
import bookic from "../../../images/open-book.png";
import authoric from "../../../images/user-avatar.png";
import calendaric from "../../../images/calendar(1).png";
import curriculumic from "../../../images/curriculum.png";
import cddiskic from "../../../images/compact-disc.png";
import departmentic from "../../../images/department.png";
import languageic from "../../../images/language.png";
import priceic from "../../../images/price.png";
import createdic from "../../../images/createdAt.png";
import categoryic from "../../../images/category.png";
import idic from "../../../images/id.png";
import barcodeic from "../../../images/barcode.png";

// components
import BookBox from "./BookBox";
import BookRating from "./BookRating";
import Button from "./BookButton";

// api
import DownloadBookApi from "../../../api/DownloadBookApi";
import { URL } from "../../../global";

const BookDetail = (props) => {
  const { book } = props;

  const working1handler = () => {
    console.log("working 1");
  };

  const working2handler = () => {
    console.log("working 2");
  };

  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const downloadBookHandler = (id) => {
    DownloadBookApi(setLoading, setResponse, id);
  };

  console.log(response);

  console.log(book);

  const date = new Date(book.addedAt);
  const a = date.getUTCDate();
  const b = date.getMonth() + 1;
  const c = date.getFullYear();

  return (
    <main className="flex flex-col justify-between h-full">
      <section className="grid grid-cols-2 md:gap-4">
        <div className="md:col-span-1 col-span-2">
          <h2 className="md:text-5xl text-3xl mb-4 md:text-left text-center">
            {book.name}
          </h2>
          <BookBox icon={authoric}>{book.author}</BookBox>
          <BookBox icon={categoryic}>Category</BookBox>
          <BookBox icon={calendaric}>{book.year}-yil</BookBox>
          <BookBox icon={curriculumic}>{book.amount} ta</BookBox>
          <BookBox icon={bookic}>{book.pages} bet</BookBox>
          <BookBox icon={cddiskic}>
            {book.cd_disk ? "Mavjud" : "Mavjud emas"}
          </BookBox>
        </div>
        <div className="md:col-span-1 col-span-2">
          <BookBox icon={priceic}>{book.price} so'm</BookBox>
          <BookBox icon={languageic}>{book.lang}</BookBox>
          <BookBox icon={createdic}>{`${a}.${b}.${c}`}</BookBox>
          <BookBox icon={idic}>Yagona ID</BookBox>
          <BookBox icon={departmentic}>{book.get_options}</BookBox>
          <BookBox icon={barcodeic}>ISBN</BookBox>
        </div>
        <BookRating />
      </section>
      <footer className="flex">
        <Button onClick={working1handler}>Band qilish</Button>
        <Button onClick={working2handler}>Wishlist'ga qo'shish</Button>
        <a
          className="rounded-xl"
          href={`${URL}/api/v1/books/download/${book.id}`}
        >
          <Button>Yuklab olish</Button>
        </a>
      </footer>
    </main>
  );
};

export default BookDetail;
