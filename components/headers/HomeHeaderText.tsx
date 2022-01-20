import Header from "./Header"
import Image from 'next/image'
import HomeIcon from "../../svgs/home.svg"

const HomeHeaderText = () => {

  const title = () => (<>
    
    <span className="text-black font-medium text-xl">Verification</span>
  </>)

  return (<Header Title={title}></Header>)
}

export default HomeHeaderText;
