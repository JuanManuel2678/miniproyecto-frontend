import { useContext } from "react";
import { AuthContext } from "../Hook/AuthContext";
import { useNavigate } from "react-router";


export const Modal = ({setShowModal}) => {
    const { isLoading, user, logout } = useContext(AuthContext);
    const navigate = useNavigate()
    
    const handleUser = () => {
       setShowModal(false)
        navigate("/user");
      };
  return (
    <div className="w-[188px] h-[174px] border border-[#E0E0E0] rounded-xl flex flex-col justify-center gap-2 font-NotoSans top-[60px] absolute p-2">

        <button 
        onClick={handleUser}
        className="flex p-2 w-full h-2/4 gap-2  hover:bg-slate-200 hover:rounded-lg items-center">
            <figure>
                <img src="/myuser.svg" alt="icon de perfil" className="w-[20px] h-[20px]"/>
            </figure>
            <h1 className="font-medium text-[14px] text-[#4f4f4f]">My Profile</h1>
        </button>
        <button 
        onClick={()=> setShowModal(false)}
        className="flex p-2 w-full h-2/4 gap-2  hover:bg-slate-200 hover:rounded-lg items-center" >
            <figure>
                <img src="/group.svg" alt="icon de perfil" className="w-[20px] h-[20px]"/>
            </figure>
            <h1 className="font-medium text-[14px] text-[#4f4f4f]">Group Chat</h1>
        </button>
        <button
         className="flex p-2 w-full h-2/4 gap-2 border-t border-t-[#E0E0E0]  hover:bg-red-200/30 hover:rounded-lg items-center"
         onClick={logout}>
            <figure>
                <img src="/exit.svg" alt="icon de salir" className="w-[20px] h-[20px]" />
            </figure>
            <h1 className="font-medium text-[14px] text-[#EB5757]">Logout</h1>
        </button>
      
    </div>
  )
}


