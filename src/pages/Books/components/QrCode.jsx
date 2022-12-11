import React from "react";

// icons
import bookIcon from "../../../images/book-new.png";
import author from "../../../images/editor.png";
import year from "../../../images/calendar.png";

const QrCode = (props) => {
  const { response } = props;

  const book = response?.data?.doc;

  return (
    <div>
      <h2 className="text-center text-xl mb-2 text-green-900 font-bold">
        Kitob ma'lumotlari
      </h2>
      <div className="flex items-center justify-around">
        <div>
          <h2 className="text-lg flex">
            <img className="w-5 mr-1" src={bookIcon} alt="book" /> {book?.name}
          </h2>
          <h2 className="text-lg flex mt-2">
            <img className="w-5 mr-1" src={author} alt="author" />{" "}
            {book?.author}
          </h2>
          <h2 className="text-lg flex mt-2">
            <img className="w-5 mr-1" src={year} alt="calendar" /> {book?.year}
          </h2>
          <div className="overflow-auto grid grid-cols-2 max-h-20 text-center">
            {book.codes.map((code) => (
              <h2
                key={code}
                className="bg-gray-300 py-1 rounded-xl px-1 mt-1 mr-1 box-border"
              >
                {code}
              </h2>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <img
            className="border-4 border-blue-800 rounded-xl"
            src={response?.data?.qrCode}
            loading="lazy"
            alt={book?.name}
          />
          <a
            className="py-1 px-2 bg-blue-800 text-white rounded-xl text-center mt-1"
            href={response?.data?.qrCode}
            download={book?.name}
          >
            Yuklab olish
          </a>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
