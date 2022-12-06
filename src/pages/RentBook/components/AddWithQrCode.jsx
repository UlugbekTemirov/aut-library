import React, { useState, useEffect } from "react";

// react
import { QrReader } from "react-qr-reader";

const AddWithQrCode = (props) => {
  const [data, setData] = useState("");
  const [xerror, setxError] = useState("");

  const time = 1000;
  const [count, setCount] = useState(15);

  const resultHandler = (result, error) => {
    if (!!result) {
      setData(result?.text);
      setxError("");
    }
    if (!!error) {
      setCount((prev) => --prev);
      // setxError("Bunday kitob mavjud emas");
    }
  };

  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data !== "") {
      setLoading(true);
      fetch(`http://localhost:3000/api/v1/books/${data}`, {
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
    }
  }, [data]);

  const refreshHandler = () => {
    setCount(15);
    setData("");
    setxError("");
  };

  useEffect(() => {
    if (count === 0) setxError("QR kod topilmadi!");
  }, [count]);

  const [code, setCode] = useState("Seria raqamini tanlang");
  const getCodeHandler = (code) => {
    setCode(code);
  };

  const addLeaserHandler = () => {
    console.log("submited!");
  };

  return (
    <React.Fragment>
      <div style={{ width: "100%" }}>
        <h2 className="text-center text-lg">{xerror !== "" && xerror}</h2>
        <h2 className="text-center text-xl">
          {count !== 0 && data === "" && count}
        </h2>
        {data === "" && count > 0 ? (
          <div className="relative">
            <QrReader
              onResult={(result, error) => resultHandler(result, error)}
              scanDelay={time}
            />
            <div className="absolute w-full h-full bg-black top-0 left-0 -z-10"></div>
          </div>
        ) : loading ? (
          <h2 className="text-centre">Loading...</h2>
        ) : data === "" ? (
          <div className="flex justify-center">
            <button
              className="bg-blue-700 text-white py-1 px-4 rounded-xl hover:bg-blue-900 transition-all mt-3"
              onClick={refreshHandler}
            >
              yangilash
            </button>
          </div>
        ) : (
          <div>
            {/* <h2 className="text-xl">Book id: {data}</h2> */}
            <input
              type="text"
              name="fullname"
              placeholder="202190400"
              className="border hover:border-blue-400 outline-none rounded-lg text-lg py-2 px-3 w-full transition-all focus:border-blue-800"
            />
            <h2 className="text-lg my-1">
              <span className="text-blue-900">Kitob:</span>{" "}
              {response?.data?.doc.name}
            </h2>
            <h2 className="text-lg my-1">
              <span className="text-blue-900">Muallif:</span>{" "}
              {response?.data?.doc.author}
            </h2>
            <h2 className="text-lg my-1">
              <span className="text-blue-900">Yili:</span>{" "}
              {response?.data?.doc.year} yil
            </h2>
            <h2 className="text-lg my-1">
              <span className="text-blue-900">Bet:</span>{" "}
              {response?.data?.doc.pages} bet
            </h2>
            <h2 className="text-lg my-1">
              <span className="text-blue-900">Seria:</span> {code}
            </h2>
            <div className="max-h-24 grid grid-cols-4 overflow-auto">
              {response?.data?.doc.codes.map((code, index) => (
                <h2
                  key={index}
                  onClick={() => getCodeHandler(code)}
                  className="text-sm text-center bg-gray-300 mr-1 rounded-xl py-1 px-2 hover:bg-gray-400 focus:bg-blue-800 cursor-pointer active:bg-gray-300 mt-1"
                >
                  {code}
                </h2>
              ))}
            </div>
            <button
              className="bg-blue-700 text-white py-1 px-4 rounded-xl hover:bg-blue-900 transition-all mt-3 text-lg"
              onClick={addLeaserHandler}
            >
              Ijara
            </button>
            <button
              className="bg-blue-700 text-white py-1 px-4 rounded-xl hover:bg-blue-900 transition-all mt-3 ml-3 text-lg"
              onClick={refreshHandler}
            >
              yangilash
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AddWithQrCode;
