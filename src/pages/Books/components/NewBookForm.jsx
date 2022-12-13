import React, { useState, useEffect } from "react";

// api
import AddNewBookApi from "../../../api/AddNewBookApi";
import GetAllBooksApi from "../../../api/GetAllBooksApi";

// icons
import remove from "../../../images/remove.png";
import barcode from "../../../images/barcode-scanner.png";

const NewBookForm = (props) => {
  const { setLoading, setResponse, response } = props;

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [pages, setPages] = useState("");
  const [code, setCode] = useState("");
  const [codes, setCodes] = useState([]);
  const [ebook, setEbook] = useState("");
  const [ebookName, setEbookName] = useState("");
  const [category, setCategory] = useState("");
  const [cd, setCD] = useState("");
  const [fromWhere, setFromWhere] = useState("");
  const [price, setPrice] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [bookCode, setBookCode] = useState("");

  // warning
  const [warning, setWarning] = useState("");

  const [booksResponse, setBooksResponse] = useState("");
  const [booksLoading, setBooksLoading] = useState(false);
  GetAllBooksApi(setBooksLoading, setBooksResponse, null, null, false);
  const allBooks = booksResponse?.data?.doc;

  const bookNameHandler = (e) => {
    const tempVal = e.target.value;
    setName(tempVal);
    if (tempVal.trim() === "" || tempVal.trim().split("").length < 4)
      setWarning("");
    else {
      let count = 0;
      allBooks.forEach((book) => {
        book.name.toLowerCase().trim().startsWith(tempVal.toLowerCase().trim())
          ? setWarning("Bu kitob kutubxonada mavjud")
          : ++count;
      });
      if (count === allBooks.length) setWarning("");
    }
  };

  // error handler
  const [error, setError] = useState("");

  const setInitialHandler = () => {
    setName("");
    setAuthor("");
    setYear("");
    setPages("");
    setCode("");
    setCodes([]);
    setEbook("");
    setEbookName("");
    setCategory("");
    setCD("");
    setFromWhere("");
    setPrice("");
    setUniqueId("");
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
    if (e.keyCode === 13) addCodesHandler();
  };

  const bookCodeScanHandler = () => {
    console.log("Product scanner");
  };

  let validate =
    Boolean(name.trim()) &&
    Boolean(author.trim()) &&
    Boolean(year.trim()) &&
    Boolean(pages.trim()) &&
    codes.length > 0;

  const submitHandler = () => {
    const data = new FormData();
    data.append("name", name);
    data.append("author", author);
    data.append("file", ebook);
    data.append("year", year);
    data.append("pages", pages);
    data.append("codes", JSON.stringify(codes));
    data.append("category", category);
    data.append("cd", cd);
    data.append("cd_disk", cd === "cdExist");
    data.append("get_options", fromWhere);
    data.append("price", price);
    data.append("uniqueId", uniqueId);

    setInitialHandler();
    if (validate) AddNewBookApi(setLoading, setResponse, data);
  };

  const eBookHandler = (e) => {
    setEbook(e.target.files[0]);
    setEbookName(e.target.files[0].name);
  };

  return (
    <form>
      <h2 className="text-red-700 text-center">{response.message}</h2>

      <div className="grid grid-cols-2 w-full">
        <div className="w-full px-2">
          <div className="books-input">
            <label htmlFor="name" className="block">
              Kitob nomi
            </label>
            <input
              required
              className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
              id="name"
              type="text"
              placeholder="Harry Potter"
              value={name}
              onChange={(e) => bookNameHandler(e)}
            />
            <h2 className="text-orange-500 text-sm">{warning}</h2>
          </div>
          <div className="books-input mt-2 w-full">
            <label className="block">Elekton shakli</label>
            <input
              className="hidden"
              id="pdfversion"
              type="file"
              accept=".pdf"
              onChange={(e) => eBookHandler(e)}
            />
            <label
              className={`p-2 outline-none rounded-lg border w-full block transition-all overflow-auto ${
                Boolean(ebook)
                  ? "opacity-100 border-blue-800 text-blue-800"
                  : "opacity-50"
              }  cursor-pointer`}
              htmlFor="pdfversion"
            >
              {Boolean(ebook) ? ebookName : "Elekton kitobni tanlang"}
            </label>
          </div>
          <div className="books-input mt-2">
            <label htmlFor="author" className="block">
              Muallif
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
              Yili
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
              Sahifasi
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
              Seriya raqami
            </label>
            <div className="flex">
              <input
                className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
                id="code"
                type="text"
                placeholder="B-00013"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                onKeyDown={(e) => EnterHandler(e)}
              />
              <button
                type="button"
                onClick={(e) => addCodesHandler(e)}
                className="py-1 px-2 border border-gray-500 text-gray-500 rounded-md ml-3 hover:border-black hover:text-black transition-all"
              >
                Qo'sh
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
            className={`text-red-700 text-xs ${
              shake && "animate-tilt-shaking"
            } `}
          >
            {error}
          </h2>
        </div>
        <div className="w-full px-2">
          <div className="books-input">
            <label htmlFor="category" className="block">
              Kategoriya
            </label>
            <input
              required
              className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
              id="category"
              type="text"
              placeholder="Badiiy"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="books-input mt-2 w-full">
            <label htmlFor="cd" className="block mb-2">
              CD
            </label>
            <div className="box-border mb-4">
              <label
                className={`p-2 outline-none rounded-lg border cursor-pointer mr-4 w-full ${
                  cd == "cdExist" && "border-blue-800  font-bold text-blue-900"
                } transition-all`}
                htmlFor="cdExist"
              >
                Mavjud
              </label>
              <input
                className="hidden"
                id="cdExist"
                type="radio"
                name="cd"
                onChange={(e) => setCD(e.target.id)}
              />
              <label
                className={`p-2 outline-none rounded-lg border cursor-pointer mr-4 w-full ${
                  cd == "cdNot" && "border-blue-800 font-bold text-blue-900"
                } transition-all`}
                htmlFor="cdNot"
              >
                Mavjud emas
              </label>
              <input
                className="hidden"
                id="cdNot"
                type="radio"
                name="cd"
                onChange={(e) => setCD(e.target.id)}
              />
            </div>
          </div>
          <div className="books-input mt-2">
            <label htmlFor="fromwhere" className="block">
              Qayerdan
            </label>
            <input
              className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
              id="fromwhere"
              type="text"
              placeholder="Korea"
              value={fromWhere}
              onChange={(e) => {
                setFromWhere(e.target.value);
              }}
            />
          </div>
          <div className="books-input mt-2">
            <label htmlFor="price" className="block">
              Narxi
            </label>
            <input
              className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
              id="price"
              type="number"
              placeholder="10000 so'm"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="books-input mt-2">
            <label htmlFor="uniqueId" className="block">
              Yagona ID
            </label>
            <input
              className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
              id="uniqueId"
              type="number"
              placeholder="a10b20c12"
              value={uniqueId}
              onChange={(e) => {
                setUniqueId(e.target.value);
              }}
            />
          </div>
          <div className="books-input mt-2">
            <label htmlFor="bookcode" className="block">
              ISBN
            </label>
            <div className="flex">
              <input
                className="p-2 outline-none rounded-lg border  rounded-r-none w-full focus:border-blue-800 transition-all"
                id="bookcode"
                type="number"
                placeholder="scan or type"
                value={bookCode}
                onChange={(e) => {
                  setBookCode(e.target.value);
                }}
              />
              <button
                type="button"
                className="py-1 px-2 border hover:bg-blue-300 border-l-0 rounded-r-xl"
                onClick={bookCodeScanHandler}
              >
                <img className="w-10" src={barcode} alt="barcode" />
              </button>
            </div>
          </div>
          {/* <div className="books-input mt-2">
            <label htmlFor="code" className="block">
              Seriya raqami
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
                Qo'sh
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
          </div> */}
        </div>
      </div>
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
