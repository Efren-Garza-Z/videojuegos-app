import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endPoint: string;

  constructor(private http: HttpClient) {
    this.endPoint = '/api/users';
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.endPoint);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.endPoint}/${id}`);
  }

  createUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.endPoint, user);
  }

  updateUser(id: number, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.endPoint}/${id}`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.endPoint}/${id}`);
  }

  addGamesToUser(id: number, gameIds: number[]): Observable<User> {
    return this.http.put<User>(`${this.endPoint}/${id}/games`, gameIds);
  }

  removeGameFromUser(id: number, gameId: number): Observable<User> {
    return this.http.delete<User>(`${this.endPoint}/${id}/games/${gameId}`);
  }

}
