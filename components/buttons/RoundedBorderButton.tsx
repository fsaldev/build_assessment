import React from "react";

type Props = {
  label: string;
}

const RoundedBorderButton = ({ label }: Props): JSX.Element => {

  return (
    <div
      className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
    >
      <span>{label}</span>
    </div>
  );
};

export default RoundedBorderButton;
