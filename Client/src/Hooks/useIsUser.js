import { user } from "../utils/get";

export const validatorUser = async (username, password) => {
  try {
    const data = await user();
    let isUser = false;

    const foundUser = data.find(
      (user) => user.Username === username && user.Password === password
    );

    if (foundUser) {
      isUser = true;
      console.log("Usuario válido:", foundUser);
    } else {
      console.log("Usuario inválido");
    }

    return isUser;
  } catch (error) {
    console.error(error);
  }
};
