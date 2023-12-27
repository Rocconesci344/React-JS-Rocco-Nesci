
const Boton = ({ children, className = "", onClick }) => {

    return (
    <button onClick={onClick} className={`bg-purpura rounded flex justify-center py-2 px-4 text-center text-white font-semibold my-4 items-center	 ${className}`}>
        {children}
    </button>
    );
  };
  
  export default Boton;
  