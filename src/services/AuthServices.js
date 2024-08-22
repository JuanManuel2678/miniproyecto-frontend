import axios from "axios";

export const loginUser = async ({ email, password }) => {
  const response = await axios.post("http://localhost:3000/api/auth/login", {
    email,
    password,
  });
  return response;
};

export const registerUser = async (data) => {
  const response = await axios.post('http://localhost:3000/api/users', data);
  return response;
};

export const updateUser = async (data) => {
  const response = await axios.patch('http://localhost3000/api/update', data)
  return response
}
export const getUser = async () => {
  const token = localStorage.getItem("tokenLogin");
  const response = await axios.get("http://localhost:3000/api/auth/info", {
    headers: { Authorization: token },
  });
  return response.data
};
