import React from "react";
import Link from "next/link";
import HomeHeader from "../../components/headers/HomeHeader";
import RoundedButton from "../../components/buttons/RoundedBorderButton";
import InputField from "../../components/inputfield";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";

export default function SignUp() {
  const [email, setEmail] = React.useState<string>("");
  const handleChange = (e) => {
    console.log("e", e);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeHeader />
      <div className="flex flex-row items-center justify-center mt-5">
        <RoundedButton label="Email" />
        <RoundedButton label="Phone" />
      </div>
      <div className="mt-5">
        <InputField
          onChange={handleChange}
          type="email"
          placeholder="johndoe@gmail.com"
        />
      </div>
      <div className="mt-5">
        <ButtonWithIcon backgroundColor={"#BEBEC2"} label="Continue" />
      </div>
      <div className="mt-5">
        <p className="text-center">
          by clicking continue you must agree to near labs{" "}
          <Link href="/">Terms & Conditions</Link>
          and <Link href="/">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
