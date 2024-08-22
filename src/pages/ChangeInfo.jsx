import { Link } from "react-router-dom";
import { HeaderFormulario } from "../components/HeaderFormulario";
import { useContext, useState } from "react";
import { AuthContext } from "../Hook/AuthContext";

export const ChangeInfo = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { user, updateMutation, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <div>CARGANDO...</div>
  }

    const handleUpdate = async e => {
      e.preventDefault()
      const data = FormData(e.target)
      await updateMutation.mutateAsync(data)
    }
  return (
    <main className="w-screen h-screen">
      <HeaderFormulario />

      <div className="w-full h-[95%] flex flex-col justify-center items-center p-10">
        <div className="w-[846px] flex justify-between font-NotoSans font-normal ">
          <Link to="/user">
            <button className="text-[#2D9CDB] flex gap-1 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              Back
            </button>
          </Link>
        </div>

        <div className="w-[846px] h-[827.5px] border border-[#BDBDBD]/50 rounded-xl flex flex-col p-10">
          <div className="w-full h-[10%] font-NotoSans ">
            <h1 className="font-normal text-[24px]">Change Info</h1>
            <span className="font-medium text-[13px] text-[#828282]">
              Changes will be reflected to every services
            </span>
          </div>
          
          <form 
           onSubmit={handleUpdate}
           className="w-full h-[90%] ">
            <ul className="h-full w-full flex flex-col justify-between font-NotoSans">
              <li className="flex items-center gap-2 ">
                <figure>
                  <img
                    src={`http://localhost:3000/api/users/image/${user?.image}`}
                    alt={user?.name ?? 'cargar imagen'}
                    className="w-[72px] h-[72px] rounded-lg"
                  />
                </figure>
                <label htmlFor="image" className="flex flex-col font-medium text-[13px] text-[#828282]">
                  {" "}
                  CHANGE PHOTO
                  <input type="file" name="image" accept="image/*" />
                </label>
              </li>
              <li className="flex flex-col">
                <label htmlFor="name" className="font-medium text-[13px]">
                  Name
                </label>
                <input
                  className="border border-gray-400 w-[60%] p-3 rounded-lg"
                  type="text"
                  id="name"
                  name="name"
                  placeholder={user?.name ?? 'Enter your name....'}
                ></input>
              </li>
              <li className="flex flex-col">
                <label htmlFor="lastname" className="font-medium text-[13px]">
                  Lastname
                </label>
                <input
                  className="border border-gray-400 w-[60%] p-3 rounded-lg"
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder={user?.lastname ?? 'Enter your lastname....'}
                ></input>
              </li>
              <li className="flex flex-col">
                <label htmlFor="bio" className="font-medium text-[13px]">
                  Bio
                </label>
                <textarea
                  className="border border-gray-400 w-[60%] p-3 rounded-lg"
                  id="bio"
                  name="bio"
                  placeholder={user?.bio ?? 'Enter your bio...'}
                ></textarea>
              </li>
              <li className="flex flex-col ">
                <label htmlFor="phone" className="font-medium text-[13px]">
                  Phone
                </label>
                <input
                  className="border border-gray-400 w-[60%] p-3 rounded-lg"
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder={user?.phone ?? 'Enter your Phone'}
                ></input>
              </li>
              <li className="flex flex-col">
                <label htmlFor="email" className="font-medium text-[13px]">
                  Email
                </label>
                <input
                  className="border border-gray-400 w-[60%] p-3 rounded-lg"
                  type="email"
                  id="email"
                  name="email"
                  placeholder={user?.email}
                  readonly
                  value={user?.email}
                ></input>
              </li>
              <li className="flex flex-col">
                <label htmlFor="password" className="font-medium text-[13px]">
                  Password
                </label>
                  <div className="flex items-center gap-2">
                  <input
                  className="border border-gray-400 w-[60%] p-3 rounded-lg"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                ></input>
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </div>
                  </div>
              </li>
              <li className="">
                <button
                  className="bg-[#2F80ED] px-6 py-2 rounded-lg text-white font-medium text-[16px]"
                  type="submit"
                >
                  Save
                </button>
              </li>
            </ul>
          </form>
        </div>

        <div className="w-[846px] flex justify-between font-NotoSans font-normal text-[14px] text-gray-500 mt-2 p-2 ">
          <span>
            Created by{" "}
            <a href="#" className=" font-semibold underline">
              {" "}
              Juan Martinez
            </a>
          </span>
          <span>Funval MiniProyect</span>
        </div>
      </div>
    </main>
  );
};
