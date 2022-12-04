import React, { useState, useEffect } from "react";

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

  // error handler
  const [error, setError] = useState("");

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
    setCode(e.target.value.toUpperCase());
  };

  const [shake, setShaking] = useState(false);

  const addCodesHandler = (e) => {
    let a = false;
    codes.forEach((xcode) => xcode === code && (a = true));
    const validate = code.trim() !== "" && !a;
    if (validate) {
      setCodes((prev) => [...prev, code]);
      setError("");
      setCode("");
    } else {
      setShaking((prev) => !prev);
      setError("Seria raqamini to'g'ri kiriting!");
    }
  };

  const removeCodeHandler = (xcode) => {
    const newCodes = codes.filter((code) => code !== xcode);
    setCodes(newCodes);
  };

  const EnterHandler = (e) => {
    // console.log(e.keyCode === 13);
    if (e.keyCode === 13) addCodesHandler();
  };

  let validate =
    Boolean(name.trim()) &&
    Boolean(author.trim()) &&
    Boolean(year.trim()) &&
    Boolean(pages.trim()) &&
    codes.length > 0;

  const submitHandler = () => {
    const book = {
      name,
      author,
      year,
      pages,
      codes,
    };
    setInitialHandler();
    if (validate) AddNewBookApi(setLoading, setResponse, book);
  };

  return (
    <form>
      <h2 className="text-red-700 text-center">{response.message}</h2>

      <div className="books-input">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          required
          className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
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
          className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
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
          className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
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
          className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
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
            className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
            id="code"
            type="text"
            placeholder="B-00013"
            value={code}
            onChange={(e) => codesHandler(e)}
            onKeyDown={(e) => EnterHandler(e)}
          />
          <button
            type="button"
            onClick={(e) => addCodesHandler(e)}
            className="py-1 px-2 border border-gray-500 text-gray-500 rounded-md ml-3 hover:border-black hover:text-black transition-all"
          >
            ADD
          </button>
        </div>

        {codes.length > 0 && (
          <div className="grid grid-cols-4 items-center mt-1 max-h-20 overflow-auto">
            {codes.map((code) => (
              <div
                onClick={() => removeCodeHandler(code)}
                key={code}
                className="bg-gray-300 rounded-md  mr-1 flex items-center py-1 px-2 cursor-pointer opacity-70 hover:opacity-100 transition-all mt-1 relative overflow-hidden"
              >
                <h2 className="text-xs hover:animate-marquee">{code}</h2>{" "}
                <img
                  className="w-4 h-4 ml-1 absolute right-1 top-1/2 -translate-y-1/2 shadow-myshadow rounded-full"
                  src={remove}
                  alt="code"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <h2
        className={`text-red-700 text-xs ${shake && "animate-tilt-shaking"} `}
      >
        {error}
      </h2>
      <button
        type="button"
        onClick={submitHandler}
        disabled={!validate}
        className={`py-2 px-4  rounded-lg mt-3 text-white transition-all ${
          validate
            ? "bg-blue-700 hover:bg-blue-800"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Qo'shish
      </button>
    </form>
  );
};

export default NewBookForm;
