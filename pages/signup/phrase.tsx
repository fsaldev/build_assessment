import React from "react";
import Link from "next/link";
import HomeHeaderText from "../../components/headers/HomeHeaderText";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";

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
  console.log("Password",Password ,"confirmPassword", confirmPassword)
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
      
     

      <div className="mt-1 ">
        {disabled ? (
          <ButtonWithIcon isDisabled={disabled} label="Continue" />
        ) : (
          <Link href="/create" passHref>
            <ButtonWithIcon isDisabled={disabled} label="Continue" />
          </Link>
        )}
      </div>
      <div className="mt-2  ">
        <p className="text-center  text-[12px]" >claudio@metapool.app</p>
      </div>

      <div className="mt-2 px-5 text-[14px]">
        <p className="text-center">
        By creating a NEAR account, you agree to the NEAR Wallet{" "}
          <Link href="/" passHref>
            <span style={{ color: "blue" }}>Terms of Service</span>
          </Link>{" "}
          and{" "}
          <Link href="/" passHref>
            <span style={{ color: "blue" }}>Privacy Policy</span>
          </Link>
        </p>
      </div>
   
   
    </div>
  );
}