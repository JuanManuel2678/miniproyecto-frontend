import { Data } from "../components/Data"
import { Description } from "../components/Description"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"


export const Register = () => {

  return (

    <main className="h-screen w-screen flex flex-col  justify-center items-center">

        <div className="w-[474px] h-[635px] border border-[#BDBDBD]/50 rounded-3xl p-14">
        <Header />

            <div className=" w-full h-full">
                <Description />
                <Data />
                <Footer />
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


