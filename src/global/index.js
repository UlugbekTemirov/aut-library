import Cookies from "universal-cookie";
const cookie = new Cookies();
const JWT = cookie.get("jwt", { path: "/" });

const APPBARLGLIGHT = "#8458B3";
const LOGINLGLIGHT = "lightgray";
const pages = ["Home", "Kitoblar", "Ijara", "Tarix"];
const userPages = ["Home", "Kitoblar"];
const URL = "http://127.0.0.1:3000";
const books = [
  {
    name: "Harry Potter 1",
    year: 2003,
    author: "J. K. Rowling",
    amount: 7,
    isExist: true,
  },
  {
    name: "Harry Potter 2",
    year: 2004,
    author: "J. K. Rowling",
    amount: 8,
    isExist: true,
  },
  {
    name: "Harry Potter 3",
    year: 2007,
    author: "J. K. Rowling",
    amount: 4,
    isExist: true,
  },
  {
    name: "Harry Potter 4",
    year: 2009,
    author: "J. K. Rowling",
    amount: 0,
    isExist: false,
  },
  {
    name: "Harry Potter 5",
    year: 2010,
    author: "J. K. Rowling",
    amount: 12,
    isExist: true,
  },
  {
    name: "Harry Potter 6",
    year: 2012,
    author: "J. K. Rowling",
    amount: 1,
    isExist: true,
  },
  {
    name: "O'tgan kunlar",
    year: 2010,
    author: "Tohir Malik",
    amount: 5,
    isExist: true,
  },
  {
    name: "Tushda kechgan umrlar",
    year: 2016,
    author: "O'tkir Hoshimov",
    amount: 1,
    isExist: true,
  },
  {
    name: "3 savdoyi",
    year: 2012,
    author: "Tomas Edison",
    amount: 1,
    isExist: true,
  },
  {
    name: "Mungli ko'zlar",
    year: 2012,
    author: "Xudoyberdi To'xtaboyev",
    amount: 1,
    isExist: true,
  },
  {
    name: "Tom Soyrning sarguzashtlari",
    year: 2012,
    author: "Mark Tven",
    amount: 1,
    isExist: true,
  },
];

export { APPBARLGLIGHT, pages, LOGINLGLIGHT, books, URL, JWT, userPages };
