import axios from "axios";

const API_URL = "https://express-mongo-connection-sigma.vercel.app/api/users";

// Get all users
export const getUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data.users;
};

// Get one user
export const getUserById = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data.user;
};

// Create user
export const createUser = async () => {
    const response = await axios.post(API_URL,);
    return response.data.user;
};

// Update user
export const updateUser = async () => {
    const response = await axios.put(`${API_URL}`);
    return response.data.user;
};

// Delete user
export const deleteUser = async () => {
    await axios.delete(`${API_URL}`);
};
