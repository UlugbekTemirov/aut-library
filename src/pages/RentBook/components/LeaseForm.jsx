import React, { useState } from "react";

// api
import AddLeaseApi from "../../../api/AddLeaseApi";

const LeaseForm = (props) => {
  const { books, loading: loader } = props;

  const [studentName, setStudentName] = useState("");
  const [orderedBook, setOrderedBook] = useState("");
  const [classOfStudent, setClassOfStudent] = useState("");
  const [major, setMajor] = useState("");
  const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
  const [orderedBookId, SetOrderedBookId] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({});
  const [error, setError] = useState("");
  if (!loading && response.status !== "success") console.log(response.message);

  const setInitialHandler = () => {
    setStudentName("");
    setOrderedBook("");
    setClassOfStudent("");
    setMajor("");
    setStudentPhoneNumber("");
    SetOrderedBookId("");
    setTargetBook("");
    setTargetSerial("");
    setSerialNumber("");
  };

  const [targetBook, setTargetBook] = useState([]);
  const orderedBookHandler = (e) => {
    if (e.target.value !== "") {
      setTargetBook(
        books.filter((book) =>
          book.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setTargetBook("");
    }
    setOrderedBook(e.target.value);
  };

  const [targetSerial, setTargetSerial] = useState([]);
  const serialNumberHandler = (e) => {
    setSerialNumber(e.target.value);
    const book = books.filter((item) => item.id.includes(orderedBookId));
    setTargetSerial(book[0].codes);
  };

  const getBookHandler = (target) => {
    setOrderedBook(target.name);
    SetOrderedBookId(target._id);
    setTargetBook("");
  };

  const getSeriaHandler = (seria) => {
    setSerialNumber(seria);
    setTargetSerial("");
  };

  const getMajorHandler = (e) => {
    setMajor(e.target.id);
  };

  const submitHandler = () => {
    const student = {
      studentName,
      orderedBook: orderedBookId,
      classOfStudent,
      orderedBookSeria: serialNumber,
      major,
      studentPhoneNumber,
    };
    setInitialHandler();
    AddLeaseApi(setLoading, setResponse, student);
  };

  return (
    <form>
      <div className="books-input">
        <label htmlFor="name" className="block">
          Talabaning ismi
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="name"
          type="text"
          placeholder="John Doe"
          value={studentName}
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
        />
      </div>
      <div className="books-input mt-2 relative">
        <label htmlFor="bookName" className="block">
          Kitob nomi
        </label>
        <input
          className={`p-2 outline-none rounded-lg border w-full ${
            Boolean(orderedBookId) &&
            "bg-gray-300 opacity-50 cursor-not-allowed"
          }`}
          id="bookName"
          type="text"
          placeholder="Harry Potter"
          value={orderedBook}
          disabled={Boolean(orderedBookId)}
          onChange={(e) => orderedBookHandler(e)}
        />
        {targetBook.length !== 0 ? (
          <div className="bg-white absolute top-18 left-0 w-full shadow-lg shadow-indigo-500/40 p-2">
            {targetBook.map((target) => (
              <h2
                className="hover:bg-gray-200 cursor-pointer px-2 py-1 rounded"
                onClick={() => getBookHandler(target)}
                key={target._id}
              >
                {target.name}
              </h2>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="books-input mt-2">
        <label htmlFor="code" className="block">
          Seriya raqami
        </label>
        <input
          className={`p-2 outline-none rounded-lg border w-full ${
            !Boolean(targetSerial) &&
            "bg-gray-300 opacity-50 cursor-not-allowed"
          }`}
          disabled={!Boolean(targetSerial)}
          id="code"
          type="text"
          placeholder="B-00013"
          value={serialNumber}
          onChange={(e) => serialNumberHandler(e)}
        />
        {targetSerial.length > 0 && (
          <div className="bg-white absolute top-18 left-0 w-full shadow-lg shadow-indigo-500/40 p-2">
            {targetSerial.map((seria) => (
              <h2
                className="hover:bg-gray-200 cursor-pointer px-2 py-1 rounded"
                onClick={() => getSeriaHandler(seria)}
                key={seria}
              >
                {seria}
              </h2>
            ))}
          </div>
        )}
      </div>
      <div className="books-input mt-2">
        <label htmlFor="classStudent" className="block">
          Guruh
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="classStudent"
          type="text"
          placeholder="E201"
          value={classOfStudent}
          onChange={(e) => {
            setClassOfStudent(e.target.value);
          }}
        />
      </div>
      <div className="books-input mt-2">
        <label htmlFor="pages" className="block">
          Fukultet
        </label>
        <label
          className={`mr-2 rounded-md py-1 px-4 cursor-pointer ${
            Boolean(major === "Architecture")
              ? "bg-blue-700 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          htmlFor="Architecture"
        >
          Architecture
        </label>
        <input
          className="hidden"
          onChange={getMajorHandler}
          name="faculty"
          type="radio"
          id="Architecture"
          checked={Boolean(major === "Architecture")}
        />
        <label
          className={`mr-2 rounded-md py-1 px-4 cursor-pointer ${
            Boolean(major === "ECE")
              ? "bg-blue-700 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          htmlFor="ECE"
        >
          ECE
        </label>
        <input
          className="hidden"
          onChange={getMajorHandler}
          name="faculty"
          type="radio"
          id="ECE"
          checked={Boolean(major === "ECE")}
        />
        <label
          className={`rounded-md py-1 px-4 cursor-pointer ${
            Boolean(major === "Civil")
              ? "bg-blue-700 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          htmlFor="Civil"
        >
          Civil
        </label>
        <input
          className="hidden"
          onChange={getMajorHandler}
          name="faculty"
          type="radio"
          id="Civil"
          checked={Boolean(major === "Civil")}
        />
        {/* <input
          className="p-2 outline-none rounded-lg border w-full"
          id="pages"
          type="text"
          placeholder="ECE"
          value={major}
          onChange={(e) => {
            setMajor(e.target.value);
          }}
        /> */}
      </div>
      <div className="books-input mt-2">
        <label htmlFor="code" className="block">
          Telefon raqam
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="code"
          type="text"
          placeholder="+998991234567"
          value={studentPhoneNumber}
          onChange={(e) => {
            setStudentPhoneNumber(e.target.value);
          }}
        />
      </div>

      <button
        type="button"
        onClick={submitHandler}
        className="py-2 px-4 bg-blue-800 text-white rounded-lg mt-3"
      >
        Qo'shish
      </button>
    </form>
  );
};

export default LeaseForm;
