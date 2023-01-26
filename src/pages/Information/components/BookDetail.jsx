import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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
import qrCodeIcon from "../../../images/qr-code.png";

// components
import BookBox from "./BookBox";
import BookRating from "./BookRating";
import Button from "./BookButton";
import Dropbox from "./Dropbox";

// api
import UploadBookApi from "../../../api/UploadBookApi";

// global
import { URL } from "../../../global";

// cookies
import Cookies from "universal-cookie";
import { Skeleton } from "@mui/material";

const BookDetail = (props) => {
  const { book, coomingSoon, status } = props;

  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });

  const [open, setOpen] = useState(false);

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

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const getBookQrHandler = (id) => {
    handleOpen();
    setLoading(true);
    fetch(`${URL}/api/v1/books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((promise) => promise.json())
      .then((response) => {
        setLoading(false);
        setResponse(response);
      });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    border: "none",
    borderRadius: 3,
  };

  const [openQrModal, setQrModal] = useState(false);
  const handleOpen = () => setQrModal(true);
  const handleClose = () => {
    setQrModal(false);
    setOpen(false);
  };

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
          <BookBox icon={idic}>{book.uniqueId ?? "Yagona ID"}</BookBox>
          <BookBox icon={departmentic}>{book.get_options}</BookBox>
          <BookBox icon={barcodeic}>ISBN</BookBox>
        </div>
        <BookRating />
      </section>
      <footer className="flex flex-wrap mt-10 items-center">
        <Button onClick={coomingSoon} img={reserveic}>
          Band qilish
        </Button>
        <Button onClick={coomingSoon} img={addic}>
          Wishlist'ga qo'shish
        </Button>
        {status && (
          <a
            className="rounded-xl"
            href={`${URL}/api/v1/books/download/${book.id}`}
          >
            <Button img={downloadic}>Yuklab olish</Button>
          </a>
        )}
        {Boolean(jwt) ? (
          <Button onClick={uploadHandler} img={uploadic}>
            Joylash
          </Button>
        ) : null}
        <img
          onClick={() => getBookQrHandler(book.id)}
          className="w-12 h-12 hover:bg-gray-300 p-1 rounded cursor-pointer"
          src={qrCodeIcon}
          alt="qrcode"
        />
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
      <Modal
        open={openQrModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              <div>
                <h2 className="text-lg font-bold text-center">{book?.name}</h2>
                {Boolean(response?.data?.qrCode) ? (
                  <img
                    className="w-full"
                    src={response?.data?.qrCode}
                    alt={book.name}
                  />
                ) : (
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={150}
                    sx={{ my: 1 }}
                  />
                )}
                <div className="flex justify-center">
                  <a
                    className="bg-blue-700 py-1 px-4 rounded-xl text-white text-xl hover:bg-blue-800 transition-all"
                    href={response?.data?.qrCode}
                    download={book?.name}
                  >
                    yuklash
                  </a>
                </div>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </main>
  );
};

export default BookDetail;
