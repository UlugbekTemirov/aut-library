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
import reserveic from "../../../images/reservebook.png";
import downloadic from "../../../images/download.png";
import uploadic from "../../../images/upload.png";
import addic from "../../../images/add.png";

// components
import BookBox from "./BookBox";
import BookRating from "./BookRating";
import Button from "./BookButton";

// api
import DownloadBookApi from "../../../api/DownloadBookApi";
import UploadBookApi from "../../../api/UploadBookApi";

// global
import { URL } from "../../../global";

// cookies
import Cookies from "universal-cookie";
import Dropbox from "./Dropbox";

const BookDetail = (props) => {
  const { book, coomingSoon } = props;

  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });

  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const downloadBookHandler = (id) => {
    DownloadBookApi(setLoading, setResponse, id);
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const uploadHandler = () => {
    setOpen(true);
  };

  const [file, setFile] = useState(null);
  const fileHandler = (e) => {
    // setFile(e.target.files[0]);
  };

  const fileWithDropHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const submitHandler = (id) => {
    const data = new FormData();
    data.append("file", file);
    UploadBookApi(setLoading, setResponse, id, data);
  };

  const date = new Date(book.addedAt);
  const a = date.getUTCDate();
  const b = date.getMonth() + 1;
  const c = date.getFullYear();

  return (
    <main className="flex flex-col justify-between h-full">
      <section className="grid grid-cols-2 md:gap-4">
        <div className="md:col-span-1 col-span-2">
          <BookBox icon={authoric}>{book.author}</BookBox>
          <BookBox icon={categoryic}>{book.category}</BookBox>
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
      <footer className="flex flex-wrap mt-10">
        <Button onClick={coomingSoon} img={reserveic}>
          Band qilish
        </Button>
        <Button onClick={coomingSoon} img={addic}>
          Wishlist'ga qo'shish
        </Button>
        <a
          className="rounded-xl"
          href={`${URL}/api/v1/books/download/${book.id}`}
        >
          <Button img={downloadic}>Yuklab olish</Button>
        </a>
        {Boolean(jwt) ? (
          <Button onClick={uploadHandler} img={uploadic}>
            Joylash
          </Button>
        ) : null}
      </footer>
      <Dropbox
        open={open}
        handleClose={handleClose}
        submitHandler={submitHandler}
        id={book.id}
        fileHandler={fileHandler}
        fileWithDropHandler={fileWithDropHandler}
        file={file}
      />
    </main>
  );
};

export default BookDetail;
