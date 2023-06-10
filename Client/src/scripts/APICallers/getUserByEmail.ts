export interface User {
    email: string;
    password: string;
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

const getUserByEmail = async function (email: string): Promise<User> {
    const response = await getUserByEmailCaller(email);

    if (response.status === 204) {
        throw new Error("Email not registered");
    }
    if (response.status === 400) {
        throw new Error("Server error. Please try again later");
    }

    return response.json();
};

const getUserByEmailCaller = function (email: string): Promise<Response> {
    const url = `http://localhost:3016/user/${email}`;

    return fetch(url);
};

export default getUserByEmail;
