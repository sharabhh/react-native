import axios from "axios";
const API_KEY = "AIzaSyAvV7IEJxaPl5gFWlUH0nMcLJsRS0uRKu4";

async function authenticate(mode, email, password){
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
      {
        email: email,
        password: password,
      }
    );
    return response;
  } catch (error) {
    console.log(error.response.data.error.message);
    throw new Error("unable to create user, please try again later");
  }
}

export async function createUser(email, password) {
 authenticate("signUp", email, password)
}

export async function login(email, password) {
  authenticate("signInWithPassword", email, password)
}
