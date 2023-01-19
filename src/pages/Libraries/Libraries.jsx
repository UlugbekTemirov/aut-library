import React from "react";

// images
import libraryImg from "../../images/library.png";
import alisherNavoiyKutubxonasi from "../../images/Alisher_navoiy_kutubxonasi.jpg";
import unilibrary from "../../images/unilibrary.jpg";
import youth_lib from "../../images/uzb_yoshlari_kutubxonasi.jpg";

const libraries = [
  {
    library: "Alisher Navoiy nomidagi Milliy kutubxona",
    img: alisherNavoiyKutubxonasi,
    link: "https://www.natlib.uz/",
    name: "Natlib",
  },
  {
    library: "Yagona Elektron kutubxona axborot tizimi",
    img: unilibrary,
    link: "https://unilibrary.uz/",
    name: "Unilibrary",
  },
  {
    library: "O'zbekiston Yoshlari Kutubxonasi",
    img: youth_lib,
    link: "https://www.kitob.uz/",
    name: "Kitob.uz",
  },
];

const Libraries = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1">
      {libraries.map((library, index) => (
        <div className=" overflow-hidden px-3 mb-4" key={index}>
          <div className=" relative h-[350px] z-10 flex items-end">
            <img
              className="w-full h-full absolute left-0 top-0 -z-10 rounded-md"
              src={library.img}
              alt="library"
            />
            <div className="w-full lib-cover text-white h-1/2 flex items-end text-center justify-center rounded-md">
              <div className="mb-4">
                <h2 className="text-2xl mb-2">{library.library}</h2>
                <a
                  className="bg-blue-900 text-xl rounded px-4"
                  href={library.link}
                  target="_blank"
                >
                  {library.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Libraries;
