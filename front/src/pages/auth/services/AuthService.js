import $api from "../http";
//import {AxiosResponse} from 'axios';
//import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
  static async login(name, password) {
    return $api.post('/login', {name, password})
  }

  static async registration(name, password, isAdmin) {
    return $api.post('/registration', {"name": name, "password": password, "isAdmin": isAdmin})
  }

  static async logout() {
    return $api.post('/logout')
  }

}
