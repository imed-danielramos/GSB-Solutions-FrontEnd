import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from "src/config/api.config";
import { UserModel } from "src/models/user.dto";



@Injectable()
export class UserService {
    //Send request to add a new user in backEnd
    addUser(value: Partial<{ name: string | null; surname: string | null; email: string | null; address: string | null; }>) {
        return this.http.get(`${API_CONFIG.baseUrl}/user/addUser/${value.name}/${value.surname}/${value.email}/${value.address}`);

    }

    //Send request to get all users in backEnd
    getUsers(){
        return this.http.get<UserModel[]>(`${API_CONFIG.baseUrl}/user/getUsers`);
    }
    constructor(private http: HttpClient) { }

}