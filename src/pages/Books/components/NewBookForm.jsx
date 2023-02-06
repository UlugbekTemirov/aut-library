import React, { useState, useEffect } from "react";

// api
import AddNewBookApi from "../../../api/AddNewBookApi";
// import GetAllBooksApi from "../../../api/GetAllBooksApi";

// icons
import remove from "../../../images/remove.png";
import barcode from "../../../images/barcode-scanner.png";
import GetAllCategoryApi from "../../../api/GetAllCategoryApi";
import AddCategoryApi from "../../../api/AddCategoryApi";

const NewBookForm = (props) => {
  const { setLoading, setResponse, response } = props;

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");
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

  const bookNameHandler = (e) => {
    const tempVal = e.target.value;
    setName(tempVal);
  };

  // error handler
  const [error, setError] = useState("");

  const setInitialHandler = () => {
    setName("");
    setAuthor("");
    setYear("");
    setLanguage("");
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
    setBookCode("");
  };

  const [shake, setShaking] = useState(false);

  const addCodesHandler = (e) => {
    let a = false;
    codes.forEach((xcode) => xcode === code && (a = true));
    const validate = code.trim() !== "" && !a;
    if (validate) {
      setCodes((prev) => [code, ...prev]);
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
    //
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
    data.append("lang", language);
    data.append("pages", pages);
    data.append("codes", JSON.stringify(codes));
    data.append("category", category);
    data.append("cd", cd);
    data.append("cd_disk", cd === "cdExist");
    data.append("get_options", fromWhere);
    data.append("price", price);
    data.append("uniqueId", uniqueId);

    if (validate) AddNewBookApi(setLoading, setResponse, data);
  };

  const eBookHandler = (e) => {
    setEbook(e.target.files[0]);
    setEbookName(e.target.files[0].name);
  };

  const [catRes, setCatRes] = useState([]);
  const [catLoading, setCatLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  GetAllCategoryApi(setCatRes, setCatLoading, update);
  const categories = catRes?.data?.doc;

  const [catAddModal, setAddCatModal] = useState(false);
  const [newCat, setNewCat] = useState("");

  const [addCatRes, setAddCatRes] = useState("");
  const [addCatLoad, setAddCatLoad] = useState(false);

  const checkAndAddCatHandler = () => {
    AddCategoryApi(setAddCatRes, setAddCatLoad, newCat);
  };

  useEffect(() => {
    if (addCatRes?.ok) {
      setUpdate((prev) => !prev);
      setAddCatModal(false);
      setInitialHandler();
    }
  }, [addCatRes]);

  return (
    <form>
      <h2 className="text-red-700 text-center">{response.message}</h2>
      {catAddModal && (
        <>
          <div
            onClick={() => setAddCatModal(false)}
            className="absolute top-0 left-0 bg-black/[0.7] z-10 w-full h-full"
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] border bg-white z-10 rounded-md py-5 px-8 shadow-2xl">
            <h2 className="text-2xl text-center text-green-900 font-bold uppercase">
              Yangi Kategoriya qo'shish
            </h2>
            <div className="flex flex-col mt-5">
              <label className="text-xl" htmlFor="cat">
                Kategoriya nomini kiriting:
              </label>
              <input
                id="cat"
                className="border-2 bg-gray-50 mt-2 rounded-md text-xl py-2 px-2 outline-none"
                placeholder="Badiiy"
                type="text"
                required
                onChange={(e) => setNewCat(e.target.value)}
                value={newCat}
              />
              <p className="text-lg text-orange-500 mt-2">
                Kategoriy nomini kiritishda e'tiborli bo'ling! Kategoriya nomi
                bosh harf bilan boshlanishi va to'g'ri yozilishi kerak!
              </p>
            </div>
            <button
              type="button"
              onClick={checkAndAddCatHandler}
              className="bg-green-700 w-full text-center py-3 rounded-xl mt-5 text-xl text-white uppercase hover:bg-green-600"
            >
              {addCatLoad ? "Loading..." : "Yangi kategoriyani qo'shish"}
            </button>
          </div>
        </>
      )}
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
          <div className="books-input mt-2 flex">
            <div className="mr-5">
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
            <div>
              <label htmlFor="language" className="block">
                Tili
              </label>
              <input
                className="p-2 outline-none rounded-lg border w-full focus:border-blue-800 transition-all"
                id="language"
                type="text"
                placeholder="uzbek"
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
              />
            </div>
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
            <div className="flex">
              <select
                required
                defaultValue=""
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 outline-none cursor-pointer rounded-lg border w-full bg-white focus:border-blue-800 transition-all"
              >
                {catLoading ? (
                  <option value={undefined}>Loading...</option>
                ) : (
                  <>
                    <option value="" disabled>
                      -- Janrni tanlang --
                    </option>
                    {categories?.map((cat, index) => (
                      <option key={index} value={cat?.category}>
                        {cat?.category}
                      </option>
                    ))}
                  </>
                )}
              </select>
              <button
                onClick={() => setAddCatModal(true)}
                type="button"
                className="px-2 text-2xl border ml-2 rounded-md hover:bg-gray-50"
              >
                <i className="fa-solid fa-plus text-3xl"></i>
              </button>
            </div>
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
              type="text"
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
