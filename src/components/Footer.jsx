import { Link } from "react-router-dom";


export const Footer = () => {

  const logo = [
    "/google.svg", 
    "/facebook.svg", 
    "/tweeter.svg", 
    "/github.svg"
    ];

  return (

    <footer className="w-full h-1/3 flex flex-col justify-evenly items-center font-NotoSans font-normal text-[14px] text-gray-500">

      <h2>or continue with these social profile</h2>

      <div>
        <ul className="flex gap-5">
        {logo &&
          logo.map((logo, index) => (

          <li key={index} className="[42px] h-[42px] rounded-full border border-[#BDBDBD]/50 p-3">
            <img src={logo} alt={`nombre ${logo}`} className="w-full h-full" />
          </li>

          ))}
         </ul>
      </div>

      <h2>
        Already a member? <Link to="/" className="text-[#2F80ED]">Login</Link>
      </h2>
    </footer>
    
  );
};
