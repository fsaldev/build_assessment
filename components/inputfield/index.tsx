import React from "react";

type Props = {
  onChange: any;
  placeholder: string;
  type: string;
};

const InputField = ({ onChange, type, placeholder }: Props): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-4 py-2 bg-gray-50 border-slate-300"
      onChange={onChange}
    />
  );
};

export default InputField;
