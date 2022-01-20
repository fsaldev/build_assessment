import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeHeader from "../../components/headers/HomeHeader";
import RoundedButton from "../../components/buttons/RoundedBorderButton";
import InputField from "../../components/inputfield";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import Divder from "../../components/divider";

function SignUp() {
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [isActiveEmail, setIsActiveEmail] = React.useState<boolean>(true);
  const [isActivePhone, setIsActivePhone] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<boolean>(true);

  const [placeholer, setPlaceHolder] =
    React.useState<string>("johndoe@gmail.com");
  const handleChange = (e: any) => {
    if (isActiveEmail === true) {
      setEmail(e.target.value);
    } else if (isActivePhone === true) {
      setPhone(e.target.value);
    }
    if (!e.target.value) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  };
  const handleButtonClick = (name: string) => {
    switch (name) {
      case "email":
        setIsActivePhone(false);
        setIsActiveEmail(true);
        setPlaceHolder("johndoe@gmail.com");
        setPhone("");
        setDisabled(true);
        break;
      case "phone":
        setIsActivePhone(true);
        setIsActiveEmail(false);
        setEmail("");
        setPlaceHolder("Ex (337) 378 8383");
        setDisabled(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <HomeHeader />
      <div className="flex flex-col items-center justify-center p-5">
        <div className="flex flex-row items-center justify-center mt-5">
          <RoundedButton
            label="Email"
            onClick={() => handleButtonClick("email")}
            isActive={isActiveEmail}
          />
          <RoundedButton
            label="Phone"
            onClick={() => handleButtonClick("phone")}
            isActive={isActivePhone}
          />
        </div>
        <div className="mt-5 w-full">
          <InputField
            onChange={handleChange}
            type={isActiveEmail === true ? "email" : "tel"}
            placeholder={placeholer}
            value={isActiveEmail === true ? email : phone}
          />
        </div>
        <div className="mt-5">
          {disabled ? (
            <ButtonWithIcon isDisabled={disabled} label="Continue" />
          ) : (
            <Link href={`/signup/verification?email=${email}&phone=${phone}`}>
              <ButtonWithIcon isDisabled={disabled} label="Continue" />
            </Link>
          )}
        </div>
        <div className="mt-5">
          <p className="text-center">
            by clicking continue you must agree to near labs{" "}
            <Link href="/">
              <span style={{ color: "blue" }}>Terms & Conditions</span>
            </Link>{" "}
            and{" "}
            <Link href="/">
              <span style={{ color: "blue" }}>Privacy Policy</span>
            </Link>
          </p>
        </div>
        <div className="mt-10 w-full">
          <Divder />
        </div>
        <div className="mt-5">
          <p className="text-center">Already have an account?</p>
        </div>
        <div className="mt-5">
          <ButtonWithIcon
            isDisabled={false}
            label="Log in with NEAR "
            isLogin={true}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
