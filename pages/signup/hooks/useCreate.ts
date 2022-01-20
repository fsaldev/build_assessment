import React from "react";

export const useCreate = () => {
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const handleChange = (e: any) => {
    if (e.target.type === "text") {
      setName(e.target.value);
    } else if (e.target.type === "email") {
      setEmail(e.target.value);
    }
  };

  React.useEffect(() => {
    if (email.length >= 3 && name.length >= 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, name]);
  return { email, setEmail, name, disabled, setDisabled, handleChange };
};
