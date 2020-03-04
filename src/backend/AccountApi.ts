import { User } from "../state/AccountStore";

export const AccountApi = {
  login: (username: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "sonikro" && password === "ronaldo") {
          resolve(new User("Jonathan Nagayoshi", "jonathan@nagayoshi.com.br"));
        } else {
          reject("Invalid username or password");
        }
      }, 1500);
    });
  }
};
