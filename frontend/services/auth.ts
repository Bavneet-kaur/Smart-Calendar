import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const registerUser = (data: any) =>
  axios.post(`${API_URL}/auth/register`, data, { withCredentials: true });

export const loginUser = (data: any) =>
  axios.post(`${API_URL}/auth/login`, data, { withCredentials: true });

export const getMe = () =>
  axios.get(`${API_URL}/auth/me`, { withCredentials: true });