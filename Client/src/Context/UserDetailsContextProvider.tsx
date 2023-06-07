import React, { createContext, useEffect, useState } from "react";
// import initialDataLoad from "../Scripts/InitialDataLoad";

/* INTERFACE */
export interface IUserDetails {
  email: string;
  firstname: string;
  lastname?: string;
  address?: {
    road: string;
    number: string;
    city: string;
    postcode: number;
    country: string;
  };
  cartAmount?: number;
}

export interface IUserDetailsContext {
  userDetails: IUserDetails;
  updateUserDetails: (userDetails: IUserDetails) => void;
}

interface Props {
  children: React.ReactNode;
}

/* CONTEXT */
export const UserDetailsContext = createContext<IUserDetailsContext>({
  userDetails: {
    email: "",
    firstname: "",
    cartAmount: 0,
  },
  updateUserDetails: () => {},
});

/* FUNCTION */
function UserDetailsContextProvider(props: Props) {
  const [myUserDetails, setMyUserDetails] = useState<IUserDetails>({
    email: "",
    firstname: "",
    cartAmount: 0,
  });

  const updateUserDetails = (newUserDetails: IUserDetails) => {
    setMyUserDetails(newUserDetails);
  };

  /*  Only runs once - Loads data from localstorage */
  // useEffect(() => {
  //   initialDataLoad(updateUserDetails);
  // }, []);

  return (
    <UserDetailsContext.Provider
      value={{
        userDetails: myUserDetails,
        updateUserDetails: updateUserDetails,
      }}
    >
      {props.children}
    </UserDetailsContext.Provider>
  );
}

export default UserDetailsContextProvider;
