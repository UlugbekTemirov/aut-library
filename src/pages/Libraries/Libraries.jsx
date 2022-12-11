import React from "react";

// images
import libraryImg from "../../images/library.png";

const libraries = [
  {
    library: "Alisher Navoiy nomidagi Milliy kutubxona",
    link: "https://www.natlib.uz/",
    name: "Natlib",
  },
  {
    library: "Yagona Elektron kutubxona axborot tizimi",
    link: "https://unilibrary.uz/",
    name: "Unilibrary",
  },
  {
    library: "O'zbekiston Yoshlari Kutubxonasi",
    link: "https://www.kitob.uz/",
    name: "Kitob.uz",
  },
];

const Libraries = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1">
      {libraries.map((library, index) => (
        <div key={index}>
          <div>
            <img src={libraryImg} alt="library" />
            <h2>{library.library}</h2>
            <a href={library.link} target="_blank">
              {library.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Libraries;
