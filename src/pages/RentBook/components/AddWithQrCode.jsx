import React, { useState, useEffect } from "react";

// react
import { QrReader } from "react-qr-reader";
import GetStudentsApi from "../../../api/GetStudentApi";
import AddLeaseApi from "../../../api/AddLeaseApi";
import LoaderMini from "./LoaderMini";
import { URL } from "../../../global";

const AddWithQrCode = (props) => {
  const { handleClose, setUpdate } = props;

  const [seriaSearch, setSeriaSearch] = useState("");

  const [data, setData] = useState("");
  const [xerror, setxError] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const time = 1000;
  const [count, setCount] = useState(15);

  const resultHandler = (result, error) => {
    if (!!result) {
      setData(result?.text);
      setxError("");
    }
    if (!!error) {
      setCount((prev) => --prev);
    }
  };

  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data !== "") {
      setLoading(true);
      fetch(`${URL}/api/v1/books/${data}`, {
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

  const [xcode, setxCode] = useState("Seria raqamini tanlang");
  const getCodeHandler = (code) => {
    setxCode(code);
  };
  const [xloading, setxLoading] = useState(false);
  const [res, setRes] = useState({});
  const studentHandler = () => {
    GetStudentsApi(setxLoading, setRes, idNumber);
  };
  const user = res?.data?.tempUser;

  const refreshHandler = () => {
    setCount(15);
    setData("");
    setxError("");
    setxCode("Seria raqamini tanlang");
    setIdNumber("");
    setRes({});
  };

  useEffect(() => {
    if (count === 0) setxError("QR kod topilmadi!");
  }, [count]);

  const getIdNumberHandler = (e) => {
    setIdNumber(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.keyCode == 13) {
      studentHandler();
    }
  };

  // submit button
  const [yloading, setyLoading] = useState(false);
  const [yresponse, setyResponse] = useState({});
  const [shake, setShake] = useState(false);
  const addLeaserHandler = () => {
    let major = "";
    if (user?.faculty == "Electrical and Computer Engineering") {
      major = "ECE";
    } else if (user?.faculty == "Civil Systems Engineering") {
      major = "Civil";
    } else {
      major = "Architecture";
    }

    const student = {
      studentName: user?.full_name,
      orderedBook: response?.data?.doc?._id,
      orderedBookSeria: xcode,
      classOfStudent: user?.group,
      major,
      studentPhoneNumber: user?.phone_number,
    };
    AddLeaseApi(setyLoading, setyResponse, student);
  };

  useEffect(() => {
    if (yresponse?.status !== "success") {
      setShake((prev) => !prev);
    }
    if (yresponse?.status === "success") {
      handleClose();
      setUpdate((prev) => !prev);
    }
  }, [yresponse]);

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
            {yloading && (
              <div className="absolute top-0 left-0 bg-black opacity-30 w-full h-full flex items-center justify-center rounded-2xl">
                <LoaderMini />
              </div>
            )}
            <h2
              className={`text-center text-red-600 font-bold text-lg ${
                shake && "animate-tilt-shaking"
              }`}
            >
              {yresponse?.message}
            </h2>
            <div className="flex items-center justify-center">
              <input
                type="number"
                required
                name="fullname"
                placeholder="202190400"
                onChange={getIdNumberHandler}
                onKeyDown={enterHandler}
                value={idNumber}
                className={`border outline-none rounded-lg text-lg py-2 px-3 w-full transition-all border-blue-800 border-r-0 rounded-r-none ${
                  Boolean(idNumber) && "border-blue-800"
                }`}
              />
              <button
                onClick={studentHandler}
                className="border border-blue-800 py-2 px-2 hover:bg-blue-100 transition-all active:bg-blue-200 text-xl rounded-xl text-blue-800 border-l-0 rounded-l-none"
              >
                Qidirish
              </button>
            </div>
            <div className="flex justify-between">
              <div className="border border-blue-800 rounded-l-xl p-2 px-4 mt-2 w-full">
                <h2 className="text-center text-green-800 text-xl">
                  Kitob ma'lumotlari
                </h2>
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
                <div className="text-lg my-1 flex flex-col">
                  <div>
                    <span className="text-blue-900">Seria:</span>{" "}
                    <input
                      onChange={(e) => setSeriaSearch(e.target.value)}
                      type="text"
                      className="outline-none border-b-2 w-1/2 px-2 text-lg"
                      placeholder="search..."
                      value={seriaSearch}
                    />
                  </div>
                  <h2
                    className={`text-red-800 ml-1 ${
                      shake && "animate-tilt-shaking"
                    }`}
                  >
                    {xcode}
                  </h2>
                </div>
                <div className="max-h-24 grid grid-cols-3 overflow-auto">
                  {response?.data?.doc.codes.map(
                    (code, index) =>
                      code
                        .toLowerCase()
                        .includes(seriaSearch.toLowerCase()) && (
                        <h2
                          key={index}
                          onClick={() => getCodeHandler(code)}
                          className={`text-sm text-center bg-gray-300 mr-1 rounded-xl py-1 px-2 focus:bg-blue-800 cursor-pointer active:bg-gray-300 mt-1 ${
                            code === xcode
                              ? "bg-blue-700 text-white"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        >
                          {code}
                        </h2>
                      )
                  )}
                </div>
              </div>
              <div className="border border-l-0 border-blue-800 rounded-r-xl p-2 px-4 mt-2 w-full">
                <h2 className="text-center text-green-800 text-xl">Talaba</h2>
                {xloading ? (
                  "loading..."
                ) : Boolean(user) ? (
                  <div>
                    <div className="flex items-center">
                      <h2 className="text-lg my-1">
                        <img
                          className="w-48 rounded-xl"
                          src={user?.immage}
                          alt="rasmi"
                        />
                      </h2>
                      <h2 className="text-lg my-1 text-center">
                        {user?.full_name}
                      </h2>
                    </div>
                    <h2 className="text-lg my-1">
                      <span className="text-blue-900">ID:</span> {user?.full_id}
                    </h2>
                    <h2 className="text-lg my-1">
                      <span className="text-blue-900">Fakultet:</span>{" "}
                      {user?.faculty}
                    </h2>
                    <h2 className="text-lg my-1">
                      <span className="text-blue-900">Guruh:</span>{" "}
                      {user?.group}
                    </h2>
                    <h2 className="text-lg my-1">
                      <span className="text-blue-900">Tel raqam:</span>{" "}
                      {user?.phone_number}
                    </h2>
                  </div>
                ) : (
                  "Talaba topilmadi"
                )}
              </div>
            </div>
            <button
              className="bg-blue-700 text-white py-1 px-4 rounded-xl hover:bg-blue-900 transition-all mt-3 text-lg"
              onClick={addLeaserHandler}
            >
              IJARA
            </button>
            <button
              className="bg-blue-700 text-white py-1 px-4 rounded-xl hover:bg-blue-900 transition-all mt-3 ml-3 text-lg"
              onClick={refreshHandler}
            >
              YANGILASH
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AddWithQrCode;
