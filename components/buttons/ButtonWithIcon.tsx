import React from "react";

type Props = {
  label: string;
  backgroundColor: string;
};

const ButtonWithIcon = ({ label, backgroundColor }: Props): JSX.Element => {
  return (
    <button
      className="hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded flex items-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <span>{ label }</span>
      <svg
        className="ml-15"
        width="17"
        height="24"
        viewBox="0 0 17 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.68652 7.70578C5.29674 7.31599 5.29886 6.68189 5.68683 6.29393L5.77467 6.20608C6.16463 5.81612 6.79426 5.81351 7.18874 6.20799L12.2728 11.292C12.6638 11.683 12.6672 12.3135 12.2728 12.708L7.18874 17.792C6.79773 18.183 6.16264 18.1819 5.77467 17.7939L5.68683 17.7061C5.29687 17.3161 5.29352 16.6872 5.68652 16.2942L9.98075 12L5.68652 7.70578Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default ButtonWithIcon;
