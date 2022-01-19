import React from "react";

type Props = {
  label: string;
}

const RoundedBorderButton = ({ label }: Props): JSX.Element => {

  return (
    <div
      className="p-4 bg-alabaster border-solid border border-silver-sand"
    >
      <span>{label}</span>
    </div>
  );
};

export default RoundedBorderButton;
