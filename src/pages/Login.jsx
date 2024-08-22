import { Header } from "../components/Header"
import { DataLogin } from "../components/DataLogin"
import { FooterLogin } from "../components/FooterLogin"



export const Login = () => {
  

  return (

    <main className="h-screen w-screen flex flex-col  justify-center items-center">

        <div className="w-[474px] h-[545px] border border-[#BDBDBD]/50 rounded-3xl p-14">

            <Header />

            <h1 className="font-NotoSans font-semibold text-[18px] text-[#333333] py-4">Login</h1>

            <div className="w-full h-[80%]">

                <DataLogin />
                <FooterLogin />
                

            </div>

        </div>

        <div className="w-[474px] flex justify-between font-NotoSans font-normal text-[14px] text-gray-500 mt-2 p-2 ">

            <span>
            Created by <a href="#" className=" font-semibold underline">Juan Martinez</a>
            </span>

            <span>
              Funval MiniProyect
            </span>

        </div>
      
    </main>
  )
}


