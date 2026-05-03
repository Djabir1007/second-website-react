import axios from "axios";
import { RegisterFormValues, LoginFormValues } from "@/pages/Auth/authForm";

type AuthUser = {
  fullName: string;
  email: string;
  phone: string;
};

type RegisterResponse = {
  message: string;
  user: AuthUser;
};

type LoginResponse = {
  message: string;
  user: AuthUser;
};

export const registerUser = async (
  registerData: RegisterFormValues,
): Promise<RegisterResponse> => {
  const response = await axios.post(
    "http://localhost:4000/api/auth/register",
    registerData,
  );

  return response.data;
};

export const loginUser = async (
  loginData: LoginFormValues,
): Promise<LoginResponse> => {
  const response = await axios.post(
    "http://localhost:4000/api/auth/login",
    loginData,
  );

  return response.data;
};
