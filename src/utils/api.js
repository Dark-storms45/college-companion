import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/token/";

async function login(email, password) {
  try {
    const response = await axios.post(API_URL, {
      email,
      password,
    });
  } catch (error) {
    return error;
  }
}

export { login };
