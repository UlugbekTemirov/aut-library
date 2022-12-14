const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-800 hover:bg-blue-700 active:bg-blue-600"
      } rounded-xl py-2 px-4 text-xl text-white mr-3 last:mr-0`}
    >
      {children}
    </button>
  );
};

export default Button;
