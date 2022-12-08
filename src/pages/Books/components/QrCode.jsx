import React from "react";

const QrCode = (props) => {
  const { response } = props;

  const book = response?.data?.doc;

  return (
    <div>
      <h2 className="text-center text-xl">Kitob ma'lumotlari</h2>
      <div className="flex">
        <div className="bg-red-800">
          <h2>Kitob: {book?.name}</h2>
          <h2>Muallif: {book?.name}</h2>
          <h2>Yil: {book?.name}</h2>
          <div className="overflow-auto grid grid-cols-3">
            {book.codes.map((code) => (
              <h2 className="bg-gray-300 py-1 rounded-xl px-2 mt-1">
                Seria: {code}
              </h2>
            ))}
          </div>
        </div>
        <div className="bg-blue-800">
          <img src={response?.data?.qrcode} alt={book?.name} />
          <a href={response?.data?.qrcode} download={book?.name}>
            Yuklab olish
          </a>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
