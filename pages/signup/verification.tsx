import React, { ChangeEvent, useState } from "react";
import HomeHeaderText from "../../components/headers/HomeHeaderText";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import { useRouter } from "next/router";
import Link from "next/link";
import { removeItemFromArray, setArrayWithData } from "../../components/utils";

export default function Verifcation() {
  const [valueOTP, setValueOTP] = useState<string>("");
  const [label, setLabel] = useState<string>("email");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [sublabel, setSubLabel] = useState<string | string[]>(
    "johndoe@gmail.com"
  );
  const [arr, setArr] = React.useState<any>([]);

  const array = [1, 2, 3, 4, 5, 6];
  const router = useRouter();
  const { query } = router;
  React.useEffect(() => {
    if (query.email && query.email.length > 0) {
      setLabel("email address");
      setSubLabel(query.email);
    } else if (query.phone && query.phone.length > 0) {
      setLabel("phone number");
      setSubLabel(query.phone);
    }
  }, [query]);

  const handleOTP = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    const value = e.target.value;
    switch (name) {
      case name:
        if (value) {
          setArrayWithData(arr, setArr, name, value);
        }
        else if (!value) {
          removeItemFromArray(arr, setArr, name);
        }
        break;
    
      default:
        break;
    }
    
    setValueOTP(valueOTP.concat(e.target.value));
    if (!e.target.value) {
      setDisabled(true);
      return;
    }
    if (valueOTP.length !== 6) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  };

  console.log("va", valueOTP);

  return (
    <div className="flex flex-col items-center justify-center">
      <HomeHeaderText />
      <div className="pt-5 px-10 flex flex-row items-center justify-center mt-5">
        <p className="text-center">
          We've sent a 6-digit verification code to the {label}
        </p>
      </div>

      <div className="mt-2 px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-blue-600">{sublabel}</p>
      </div>

      <div className="mt-8 px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-gray-500">Enter Verification Code</p>
      </div>

      <div className="mt-0">
        <div id="otp" className="flex flex-row justify-center px-2 ">
          {array.map((arr, ind) => (
            <input
              onChange={(e) => handleOTP(e, `otp-${ind}`)}
              className="m-2 border focus:border-accent-theme focus:outline-none h-10 w-10 text-center rounded appearance-none"
              type="text"
              id="first"
              maxLength={1}
              key={ind}
              name={`otp-${ind}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-5">
        {disabled ? (
          <ButtonWithIcon label="Continue" isDisabled={disabled} />
        ) : (
          <Link href="/create">
            <ButtonWithIcon label="Continue" isDisabled={false} />
          </Link>
        )}
      </div>

      <div className="my-5">
        <p className="text-center">Did't receive your code?</p>
      </div>

      <div className="mt-2  mb-7 px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-blue-600">Send to a different {label}</p>
      </div>

      <div className=" px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-blue-600">Resend your code</p>
      </div>
    </div>
  );
}
