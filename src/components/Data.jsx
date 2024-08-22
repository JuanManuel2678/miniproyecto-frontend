import { useContext, useState } from "react";
import { AuthContext } from "../Hook/AuthContext";

export const Data = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { registerMutation } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
       const data = {
        email: e.target.email.value,
        password: e.target.password.value
       }
       
    await registerMutation.mutateAsync(data)
  };

  return (
    <form
      onSubmit={handleRegister}
      className="w-full h-1/3  flex flex-col gap-3 justify-evenly font-NotoSans"
    >
      <label className="h-[48px] border border-[#BDBDBD]/50 rounded-lg content-center flex gap-5 p-2 font-normal text-[16px]">
        <img src="/email.svg" alt="icono de correo" className="h-full " />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="pl-2 w-full outline-none"
        />
      </label>

      <label className="h-[48px] border border-[#BDBDBD]/50 rounded-lg content-center flex gap-5 p-2 font-normal text-[16px]">
        <img src="/password.svg" alt="icono de contraseña" className="h-full" />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          minlength="8"
          required
          placeholder="Password"
          className="pl-2 w-full outline-none"
        />
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
      </label>

      <button
        type="submit"
        className=" h-[38px] bg-[#2F80ED] text-white rounded-lg"
      >
        Start coding now
      </button>
    </form>
  );
};
