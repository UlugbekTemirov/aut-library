import Cookies from "universal-cookie";
const cookie = new Cookies();
const JWT = cookie.get("jwt", { path: "/" });

const APPBARLGLIGHT = "rgb(0,0,128)";
const LOGINLGLIGHT = "lightgray";
const userPages = ["Home", "Kitoblar", "Kutubxonalar", "Rating"];
const pages = [...userPages, "Ijara", "Tarix"];
const URL = "http://127.0.0.1:3000";

export { APPBARLGLIGHT, pages, LOGINLGLIGHT, URL, JWT, userPages };
