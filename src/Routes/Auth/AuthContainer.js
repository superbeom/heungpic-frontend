import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("nouser@daum.net");
  const [requestSecret] = useMutation(LOG_IN, {
    update: (_, { data: { requestSecret } }) => {
      if (!requestSecret) {
        toast.error("You don't have an account yet! Create one!!");
        setTimeout(() => setAction("signUp"), 2000);
      }
    },
    variables: { email: email.value }
  });

  const createAccount = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        requestSecret();
      } else {
        toast.error("Email is required!");
      }
    } else if (action === "signUp") {
      if (email.value !== "" && username.value !== "") {
        createAccount();
      } else {
        toast.error("Email and Username fields are required!");
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
    />
  );
};
