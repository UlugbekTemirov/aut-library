const Button = ({ children, onClick, disabled, img }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-800 hover:bg-blue-700 active:bg-blue-600"
      } rounded-xl py-2 px-4 text-xl text-white mr-3 flex items-center`}
    >
      {children} <img className="w-6 ml-2" src={img} alt="icon" />
    </button>
  );
};

export default Button;
