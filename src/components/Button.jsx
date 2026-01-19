const Button = ({ text, onClick }) => {
  return (
    <button
      className="px-4 py-2 flex items-center justify-center rounded-full text-black bg-[#Facf2e] cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
