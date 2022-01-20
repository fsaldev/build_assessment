import React from "react";
import ArrowRight from "../../svgs/arrow-right.svg";

type Props = {
  label: string;
  isDisabled: boolean;
};

const ButtonWithIcon = ({ label, isDisabled }: Props): JSX.Element => {
  let className =
    "bg-accent-theme font-bold py-2 px-4 rounded flex items-center";
  if (isDisabled) {
    className = "bg-silver-sand font-bold py-2 px-4 rounded flex items-center";
  }
  return (
    <button className={className} disabled={isDisabled}>
      <span style={{ color: "white" }} className="mr-3">
        {label}
      </span>
      <ArrowRight />
    </button>
  );
};

export default ButtonWithIcon;
