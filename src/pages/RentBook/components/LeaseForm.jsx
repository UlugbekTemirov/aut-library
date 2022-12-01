import React, { useState } from "react";

// api

const LeaseForm = (props) => {
  const [studentName, setStudentName] = useState("");
  const [orderedBook, setOrderedBook] = useState("");
  const [classOfStudent, setClassOfStudent] = useState("");
  const [major, setMajor] = useState("");
  const [studentPhoneNumber, setStudentPhoneNumber] = useState("");

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({});

  const setInitialHandler = () => {
    setName("");
    setAuthor("");
    setYear("");
    setPages("");
    setCode("");
    setAmount("");
  };

  const submitHandler = () => {
    const student = {
      studentName,
      orderedBook,
      classOfStudent,
      major,
      studentPhoneNumber,
    };
    setInitialHandler();
    AddLeaseApi(setLoading, setResponse, student);
  };
  console.log(response);
  console.log(loading);

  return (
    <form>
      <div className="books-input">
        <label htmlFor="name" className="block">
          Student Name
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
      <div className="books-input mt-2">
        <label htmlFor="bookName" className="block">
          Ordered Book
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="bookName"
          type="text"
          placeholder="Book name"
          value={orderedBook}
          onChange={(e) => {
            setOrderedBook(e.target.value);
          }}
        />
      </div>
      <div className="books-input mt-2">
        <label htmlFor="classStudent" className="block">
          Faculty
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="classStudent"
          type="text"
          placeholder="2017"
          value={classOfStudent}
          onChange={(e) => {
            setClassOfStudent(e.target.value);
          }}
        />
      </div>
      <div className="books-input mt-2">
        <label htmlFor="pages" className="block">
          Major
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="pages"
          type="number"
          placeholder="416"
          value={major}
          onChange={(e) => {
            setMajor(e.target.value);
          }}
        />
      </div>
      <div className="books-input mt-2">
        <label htmlFor="code" className="block">
          Phone Number
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="code"
          type="text"
          placeholder="B-00013"
          value={studentPhoneNumber}
          onChange={(e) => {
            setStudentPhoneNumber(e.target.value);
          }}
        />
      </div>

      <button
        type="button"
        onClick={submitHandler}
        className="p-2 bg-gray-400 rounded-lg mt-3"
      >
        Qo'shish
      </button>
    </form>
  );
};

export default LeaseForm;
