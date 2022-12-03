import React, { useState } from "react";

// api
import AddNewBookApi from "../../../api/AddNewBookApi";

// remove icon
import remove from "../../../images/remove.png";

const NewBookForm = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [pages, setPages] = useState("");
  const [code, setCode] = useState("");
  const [codes, setCodes] = useState([]);

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({});

  const setInitialHandler = () => {
    setName("");
    setAuthor("");
    setYear("");
    setPages("");
    setCode("");
    setCodes([]);
  };

  const codesHandler = (e) => {
    setCode(e.target.value);
  };

  const addCodesHandler = () => {
    setCodes((prev) => [...prev, code]);
    setCode("");
  };

  const submitHandler = () => {
    const book = {
      name,
      author,
      year,
      pages,
      codes,
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
        <div className="flex">
          <input
            className="p-2 outline-none rounded-lg border w-full"
            id="code"
            type="text"
            placeholder="B-00013"
            value={code}
            onChange={(e) => codesHandler(e)}
          />
          <button type="button" onClick={addCodesHandler} className="p-2">
            Add
          </button>
        </div>
        {codes.length > 0 && (
          <div className="grid grid-cols-4 items-center mt-1 max-h-20 overflow-auto">
            {codes.map((code) => (
              <div className="bg-gray-300 rounded-md mr-1 flex items-center py-1 px-2 cursor-pointer opacity-60 hover:opacity-100 transition-all mt-1">
                <h2 className="text-xs overflow-hidden">{code}</h2>{" "}
                <img className="w-4 h-4 ml-1" src={remove} alt="code" />
              </div>
            ))}
          </div>
        )}
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
