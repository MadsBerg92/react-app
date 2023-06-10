interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  lastname: string;
  address: {
    road: string;
    number: string;
    city: string;
    postcode: string;
    country: string;
  };
}

interface SendData {
  email: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  lastname: string;
  address: {
    road: string;
    number: string;
    city: string;
    postcode: number;
    country: string;
  };
}

const convertFormDataToSendData = (formData: FormData): SendData => {
  const { postcode, ...restAddress } = formData.address;
  return {
    ...formData,
    address: {
      ...restAddress,
      postcode: parseInt(postcode),
    },
  };
};

export const postNewUser = async (userDetails: FormData): Promise<string> => {
  const sendData = convertFormDataToSendData(userDetails);

  const requestOptions: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sendData),
  };

  const response = await fetch(`http://localhost:3016/user/`, requestOptions);

  if (response.status === 200) {
    const newData = {
      email: userDetails.email,
      password: userDetails.password,
    };
    const jsonData = JSON.stringify(newData);
    localStorage.setItem("USERDETAILS", jsonData);
    return "";
  }

  if (response.status === 409) {
    return "Email already in use";
  }

  return "server error - Please try again later";
};
