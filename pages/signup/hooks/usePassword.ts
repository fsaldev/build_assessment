import React from "react";

export const usePassword = () => {
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [pasCheck, setPasCheck] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setconfirmPassword] = React.useState<string>("");

  React.useEffect(() => {
    if (password.length >= 3 && confirmPassword.length >= 3) {
      setDisabled(true);
      if (password === confirmPassword) {
        setDisabled(false);
        setPasCheck(false);
      } else if (
        password.length < confirmPassword.length ||
        confirmPassword.length > password.length
      ) {
        setDisabled(true);
        setPasCheck(false);
      } else if (
        password.length === confirmPassword.length ||
        confirmPassword.length === password.length
      ) {
        if (password !== confirmPassword) {
          setPasCheck(true);
          setDisabled(true);
        } else {
          setPasCheck(false);
        }
        setDisabled(true);
      }
    }
    if (password.length <= 3 || confirmPassword.length <= 3) {
      setPasCheck(false);
    }
  }, [password, confirmPassword]);

  const handleChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleChange1 = (e: any) => {
    setconfirmPassword(e.target.value);
  };
  return {
    pasCheck,
    password,
    confirmPassword,
    disabled,
    setDisabled,
    handleChange,
    handleChange1,
  };
};
