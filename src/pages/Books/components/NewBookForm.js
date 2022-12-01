import React, { useState } from "react";

// api
import AddNewBookApi from "../../../api/AddNewBookApi";

const NewBookForm = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [pages, setPages] = useState("");
  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");

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
    const book = {
      name,
      author,
      year,
      pages,
      code,
      amount,
    };
    setInitialHandler();
    AddNewBookApi(setLoading, setResponse, book);
  };
  console.log(response);
  console.log(loading);

  return (
    <form>
      <div className="books-input">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="name"
          type="text"
          placeholder="Harry Potter"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="books-input mt-2">
        <label htmlFor="author" className="block">
          Author
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="author"
          type="text"
          placeholder="J. K. Rowlings"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div className="books-input mt-2">
        <label htmlFor="year" className="block">
          Year
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="year"
          type="text"
          placeholder="2017"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      </div>
      <div className="books-input mt-2">
        <label htmlFor="pages" className="block">
          Pages
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="pages"
          type="number"
          placeholder="416"
          value={pages}
          onChange={(e) => {
            setPages(e.target.value);
          }}
        />
      </div>
      <div className="books-input mt-2">
        <label htmlFor="code" className="block">
          Code
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="code"
          type="text"
          placeholder="B-00013"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
      </div>
      <div className="books-input mt-2">
        <label htmlFor="amount" className="block">
          Amount
        </label>
        <input
          className="p-2 outline-none rounded-lg border w-full"
          id="amount"
          type="number"
          placeholder="13"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
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

export default NewBookForm;
