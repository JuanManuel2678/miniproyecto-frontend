import { UserOptions } from "./UserOptions"


export const HeaderFormulario = () => {

  return (

    <header className="w-full h-[60px] content-center items-center font-NotoSans px-10 flex justify-between ">

        <figure className="flex items-center">
            <img src="/devchallenges.png" alt="logo dev challenges" className="h-[20px] w-[25px]"/>
            <figcaption className="font-bold">devchallenges</figcaption>
        </figure>
        <UserOptions />
    </header>
    
  )
}


