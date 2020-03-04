import { createStore } from "react-hookstore";

export class User {
  public name: string = "";
  public email: string = "";

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

export class AccountStore {
  public isAuthenticated: boolean = false;
  public isAuthenticating: boolean = false;
  public user: User = new User("", "");
  public authError: any;

}

export const AccountStoreInterface = createStore("account", new AccountStore());
