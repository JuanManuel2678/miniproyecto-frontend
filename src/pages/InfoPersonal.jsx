import { useContext } from "react";
import { HeaderFormulario } from "../components/HeaderFormulario";
import { Link } from "react-router-dom";
import { AuthContext } from "../Hook/AuthContext.jsx";




export const InfoPersonal = () => {
  const { isLoading, user } = useContext(AuthContext)

  if (isLoading) {
    return <div>CARGANDO...</div>
  }

  return (
    <main className="w-screen h-screen">
      <HeaderFormulario />

      <section className="w-full h-[95%]">
        <article className="text-center w-full h-[120px] font-NotoSans flex flex-col justify-end gap-1">
          <h1 className="font-normal text-[36px]">Personal info</h1>
          <h3 className="font-light text-[18px]">
            Basic info, like your name and photo
          </h3>
        </article>

        <article className="w-full h-[87%] flex flex-col justify-center items-center">
          <div className="w-[846px] h-[580.5px] border border-[#BDBDBD]/50 rounded-xl flex flex-col">
            <div className="w-full h-[20%] border-b border-b-[#BDBDBD] flex justify-between p-10 items-center">
              <div className="flex flex-col">
                <h2 className="font-normal text-[24px]">Profile</h2>
                <span className="font-medium text-[13px] text-[#828282]">
                  Some info may be visible to other people
                </span>
              </div>
              <Link to="/update">
                <button className="border border-gray-400 px-8 py-1 rounded-xl">
                  Edit
                </button>
              </Link>
            </div>
            <div className="w-full h-[20%] border-b border-b-[#BDBDBD] flex">
              <div className="w-[30%] h-full content-center pl-10">
                <h2 className="font-medium text-[13px] text-[#828282]">
                  PHOTO
                </h2>
              </div>
              <figure className="w-[70%] h-full p-5">
                <img
                  src={`http://localhost:3000/api/users/image/${user?.image}`}
                  alt={user?.name ?? 'nombre no registrado'} 
                  className="w-[72px] h-[72px] rounded-lg"
                />
              </figure>
            </div>
            <div className="w-full h-[12%] border-b border-b-[#BDBDBD] flex">
              <div className="w-[30%] h-full content-center pl-10">
                <h2 className="font-medium text-[13px] text-[#828282]">NAME</h2>
              </div>
              <div className="w-[70%] h-full p-5">
                <h2 className="font-medium text-[18px] text-[#333333]">
                  {user?.name ?? 'Nombre no registrado'} { user?.lastname ?? 'apellido no registrado'} 
                </h2>
              </div>
            </div>
            <div className="w-full h-[12%] border-b border-b-[#BDBDBD] flex">
              <div className="w-[30%] h-full content-center pl-10">
                <h2 className="font-medium text-[13px] text-[#828282]">BIO</h2>
              </div>
              <div className="w-[70%] h-full content-center pl-5">
                <h2 className="font-medium text-[18px] text-[#333333]">
                  {user?.bio ??'Bio no registrado , actualizar datos'}
                </h2>
              </div>
            </div>
            <div className="w-full h-[12%] border-b border-b-[#BDBDBD] flex">
              <div className="w-[30%] h-full content-center pl-10">
                <h2 className="font-medium text-[13px] text-[#828282]">
                  PHONE
                </h2>
              </div>
              <div className="w-[70%] h-full content-center pl-5">
                <h2 className="font-medium text-[18px] text-[#333333]">
                  {user?.phone ?? 'Teléfono no registrado actualizar datos '}
                </h2>
              </div>
            </div>
            <div className="w-full h-[12%] border-b border-b-[#BDBDBD] flex">
              <div className="w-[30%] h-full content-center pl-10">
                <h2 className="font-medium text-[13px] text-[#828282]">
                  EMAIL
                </h2>
              </div>
              <div className="w-[70%] h-full content-center pl-5">
                <h2 className="font-medium text-[18px] text-[#333333]">
                  {user?.email}
                </h2>
              </div>
            </div>
            <div className="w-full h-[12%] flex">
              <div className="w-[30%] h-full content-center pl-10">
                <h2 className="font-medium text-[13px] text-[#828282]">
                  PASSWORD
                </h2>
              </div>
              <div className="w-[70%] h-full content-center pl-5">
                <h2 className="font-medium text-[18px] text-[#333333]">
                  ************
                </h2>
              </div>
            </div>
          </div>

          <div className="w-[846px] flex justify-between font-NotoSans font-normal text-[14px] text-gray-500 mt-2 p-2 ">
            <span>
              Created by{" "}
              <a href="#" className=" font-semibold underline">
                Juan Martinez
              </a>
            </span>
            <span>Funval MiniProyect</span>
          </div>
        </article>
      </section>
    </main>
  );
};
