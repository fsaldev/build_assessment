import React from "react";
import Link from "next/link";
import HomeHeaderText from "../../components/headers/HomeHeaderText";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import InputField from "../../components/inputfield";
import CopyIcon from "../../svgs/copy.svg";
import Divder from "../../components/divider";
import ButtonWithNum from "../../components/buttons/ButtonWithNum";

export default function CreateNEAR() {
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [pasCheck, setPasCheck] = React.useState<boolean>(false);
  const [Password, setPassword] = React.useState<string>("");
  const [confirmPassword, setconfirmPassword] = React.useState<string>("");

  const handleChange = (e: any) => {
    setPassword(e.target.value);
  };


  const handleChange1 = (e: any) => {
    setconfirmPassword(e.target.value)
    if (confirmPassword.length > 0) {
      setDisabled(false)
    }
  }
  console.log("Password", Password, "confirmPassword", confirmPassword)
 

  return (
    <div className="flex flex-col items-center justify-center">
      <HomeHeaderText Text="Secure your account" />
      <div className=" px-6 flex flex-row items-center justify-center mt-6">
        <p className="text-start text-gray-500">
        Keep your apps safe from other with access to your computer.
        </p>
      </div>
      <div className="mt-5">
          <p className="text-center text-[20px]">Seed phrase</p>
      </div>
      



     
      
      <div className="mt-4    lex flex-row items-center justify-center px-5  ">
        
  <div className="border rounded-lg bg-gray-50 flex flex-col items-center justify-center " >
        
          <div className=" flex flex-row items-center justify-center">
          <ButtonWithNum number='1' description='gather' />
          <ButtonWithNum number='2' description='engage' />
          <ButtonWithNum number='3' description='father' />
    
          </div>
          
          
    
          <div className=" flex flex-row items-center justify-center ">
          <ButtonWithNum number='4' description='plant' />
          <ButtonWithNum number='5' description='indego' />
          <ButtonWithNum number='6' description='dental' />
     
          </div>
          

          <div className=" flex flex-row items-center justify-center">
          <ButtonWithNum number='7' description='sick' />
          <ButtonWithNum number='8' description='fungus' />
          <ButtonWithNum number='9' description='river' />
     
          </div>

          <div className=" flex flex-row items-center justify-center">
          <ButtonWithNum number='10' description='morning' />
          <ButtonWithNum number='11' description='love' />
          <ButtonWithNum number='12' description='cow' />
     
          </div>
          



        </div>

        </div>



      




      <div style={{ color: "#885FFF" }} className="mt-5 flex"><CopyIcon/>
          <p className="text-center text-[20px] pl-3 ">Copy seed</p>
      </div>
      
      <div className="mt-7 ">
      
          <Link href="/create">
            <ButtonWithIcon isDisabled={false} label="Continue to Login" />
          </Link>
      
      </div>
   
   
    </div>
  );
}
