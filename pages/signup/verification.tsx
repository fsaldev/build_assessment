import React, { useState } from "react";
import HomeHeaderText from "../../components/headers/HomeHeaderText";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";

// document.addEventListener("DOMContentLoaded", function(event) {

//   function OTPInput() {
//   const inputs = document.querySelectorAll('#otp > *[id]');
//     for (let i = 0; i < inputs.length; i++) {
//       inputs[i].addEventListener('keydown',
//         function (event:any) {
//         if (event.key === "Backspace") {
//           inputs[i].value = '';
//           if (i !== 0) inputs[i - 1].focus();
//         } else {
//           if (i === inputs.length - 1 && inputs[i].value !== '')
//           {
//             return true;
//           } else if (event.keyCode > 47 && event.keyCode < 58)
//           {
//             inputs[i].value = event.key;
//             if (i !== inputs.length - 1)
//               inputs[i + 1].focus();
//             event.preventDefault();
//           } else if (event.keyCode > 64 && event.keyCode < 91) {
//             inputs[i].value = String.fromCharCode(event.keyCode);
//             if (i !== inputs.length - 1) inputs[i + 1].focus();
//             event.preventDefault();
//           }
//         }
//       });
//     }
//   } OTPInput();
// });


export default function Verifcation() {
  const [valueOTP, setValueOTP] = useState<string>('')


  const handleOTP = (e: any) => {
    setValueOTP(valueOTP.concat(e.target.value))
  }
  console.log('e', valueOTP);
  
  return (
    <div className="flex flex-col items-center justify-center">
    <HomeHeaderText />
      <div className="pt-5 px-10 flex flex-row items-center justify-center mt-5">
        <p className="text-center">
        We've sent a 6-digit verification code to the email address
      </p>
      </div>
      
      <div className="mt-2 px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-blue-600">
        johndoe@gmail.com
      </p>
      </div>

      <div className="mt-8 px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-gray-500">
        Enter Verification Code
      </p>
      </div>

    <div className="mt-0">
        <div id="otp" className="flex flex-row justify-center text-center px-2 ">
          <input onChange={handleOTP} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxLength={1} />
          <input onChange={handleOTP} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxLength={1} />
          <input onChange={handleOTP} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxLength={1} />
          <input onChange={handleOTP} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxLength={1} />
          <input onChange={handleOTP} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxLength={1} />
          <input onChange={handleOTP} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxLength={1} />
        </div>
    </div>
    <div className="mt-5">
      <ButtonWithIcon  label="Continue" text-center text-gray-500 isDisabled={false} />
      </div>
      
    <div className="my-5">
      <p className="text-center">
      Did't receive your code?
      </p>
    </div>
      
    <div className="mt-2  mb-7 px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-blue-600">
        Send to a different email address
      </p>
      </div>

      <div className=" px-10 flex flex-row items-center justify-center ">
        <p className="text-center text-blue-600">
        Resend your code
      </p>
      </div>
  </div>
  )
}

