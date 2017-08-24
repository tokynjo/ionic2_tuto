import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}



@Injectable()
export class AuthServiceProvider {
  currentUser: User;
  private baseUrl: string = 'http://localhost/mini-projet/web/app_dev.php/';
  private source: string = 'ign';
  private apiKey: string = '8cb9a81f987c41969941a92c1c84391e';
  public login(credentials) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    var param = `client_secret=3franc1imb404c4wss4wowoocg8c0g4c4wkwc408owgwwocscg&client_id=12_657k9iaj8zggswwoo844cs844csooo0s08wk00g8kg48cckkcc&redirect_uri=http://google.fr&grant-type=password&grant_type=password`;
    param += `&username=` + credentials.email + `&password=` + credentials.password;
    const url = `${this.baseUrl}oauth/v2/token?`+param;
    return this.http.get(url, headers)
            .map((response: Response) => {
      // login successful if there's a jwt token in the response
      let user = response.json();
      if (user && user.access_token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('token', user.access_token);
        localStorage.setItem('refresh_token', user.refresh_token);
      }
    });
    /*if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        var trest = this.getToken(credentials.email, credentials.password);
        // At this point make a request to your backend to make a real check!
        let access = trest;
        
        observer.next(access);
        observer.complete();
      });
    }*/
  }
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  getToken(mail, pass) {
    var param = `client_secret=3franc1imb404c4wss4wowoocg8c0g4c4wkwc408owgwwocscg&client_id=12_657k9iaj8zggswwoo844cs844csooo0s08wk00g8kg48cckkcc&redirect_uri=http://google.fr&grant-type=password&grant_type=password`;
    param += `&username=` + mail + `&password=` + pass;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    //headers.append('Authorization', 'Basic Ym9jYXNheTpib2Nhc2F5MjAxNyQ=');
    const url = `${this.baseUrl}oauth/v2/token?` + param;
    return this.http.get(url, headers)
      .toPromise()
      .then(response => console.log(response.json()))
      .catch(error => console.log('Une erreur est survenue ' + error))
  }
   getReport(){
    var token = localStorage.getItem('token');
    console.log(token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Accept', 'application/json');
    const url = `${this.baseUrl}api/report`;
    return this.http.post(url, null,{
      headers:headers
    })
            .map(res=> res.json());
  }
}
