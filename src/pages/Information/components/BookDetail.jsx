import React, { useState } from "react";

// mui
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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

const BookDetail = (props) => {
  const { book } = props;

  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });

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

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const uploadHandler = () => {
    setOpen(true);
  };

  const [file, setFile] = useState(null);
  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  console.log(file);
  const submitHandler = (id) => {
    const data = new FormData();
    data.append("file", file);
    UploadBookApi(setLoading, setResponse, id, data);
  };

  console.log(response);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "12px",
  };

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
      <footer className="flex flex-wrap">
        <Button onClick={working1handler} img={reserveic}>
          Band qilish
        </Button>
        <Button onClick={working2handler} img={addic}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Kitobni tanlang
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input type="file" onChange={fileHandler} />
            <button type="button" onClick={() => submitHandler(book.id)}>
              submit
            </button>
          </Typography>
        </Box>
      </Modal>
    </main>
  );
};

export default BookDetail;
