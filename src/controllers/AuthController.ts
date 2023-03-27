import AuthApi, { SignInData, SignUpData } from '../api/AuthAPI';

class AuthController {
  api: AuthApi;

  constructor() {
    this.api = new AuthApi();
  }

  async signup(data: SignUpData) {
    try {
      await this.api.signup(data);
    } catch (error) {
      console.error(error);
    }
  }

  async signin(data: SignInData) {
    try {
      await this.api.signin(data);
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    try {
      await this.api.logout();
    } catch (error) {
      console.error(error);
    }
  }

  getUser() {
    try {
      const user = this.api.getUser();
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }
}

export default AuthController;
