export const login = (username: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "sonikro" && password === "ronaldo") {
                resolve("Jonathan Nagayoshi");
              } else {
                reject("Invalid username or password")
              }
        }, 1500)
    })
  
};
