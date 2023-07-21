import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, map ,BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServService {
  [x: string]: any;
  private id: any;
  userData= new BehaviorSubject(null);

  //Decoding Access token
  saveUserData() {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken:any = jwtDecode(token);
      this.userData.next(decodedToken);
      console.log(JSON.stringify(this.userData.value));
    }
  }


  constructor(private http: HttpClient , private _Router:Router) {
    // if(localStorage.getItem('userToken')){
    //   this.saveUserData();
    // }
  }

//Payment Form --------------------------------------------------------------------------------
//Servive
  getServiceContent(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/allPackages').pipe(
      map(data => {
        this.id = data.id;
        return data;
      })
    );
  }
//Payform
retriveData(formData: any): Observable<any> {
  const token = localStorage.getItem('userToken') ?? '';
  const headers = new HttpHeaders().set('access_token', token);
  return this.http.post('http://127.0.0.1:8000/api/payform',formData , { headers });
}

//retrival of illiterates data
  getIlliteratesData(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/payform');

}

//retrival of Workspaces
getWorkspace(): Observable<any> {
  return this.http.get<any>('http://127.0.0.1:8000/api/workspaces')

}
//-----------------------------------------------------------------------------------------

//Admin Dashboard--------------------------------------------------------------------------
getSpecOrders(): Observable<any> {
  return this.http.get<any>('http://127.0.0.1:8000/api/specificorders')
  ;
}
getAllOrders(): Observable<any> {
  return this.http.get<any>('http://127.0.0.1:8000/api/allorders')
  ;
}
getallill(): Observable<any> {
  return this.http.get<any>('http://127.0.0.1:8000/api/allilliterates ')
  ;
}
sendPerson(personData: any): Observable<any> {
  return this.http.post('http://127.0.0.1:8000/api/payform', personData);
}
allUsers(): Observable<any> {
  return this.http.get('http://127.0.0.1:8000/api/allUsers');
}
feedback(): Observable<any> {
  return this.http.get('http://127.0.0.1:8000/api/allMessages');
}
addInform(addInData:object):Observable<any>
{
  return this.http.post(`http://127.0.0.1:8000/api/insertIlliteratesAdmin`,addInData)
}
loginAdmin(loginData:object):Observable<any>
{
  return this.http.post(`http://127.0.0.1:8000/api/adminlogin`,loginData)
}
registerAdmin(registerData:any):Observable<any>
{
  return this.http.post('http://127.0.0.1:8000/api/adminregister' , registerData)
}
logoutAdmin(): Observable<any> {
  const token = localStorage.getItem('userToken') ?? '';
  const headers = new HttpHeaders().set('access_token', token);
  return this.http.post('http://127.0.0.1:8000/api/adminlogout', {}, { headers });
}

//---------------------------------------------------------------------------------------------

//registeration--------------------------------------------------------------------------------

  register(registerData:any):Observable<any>
  {
    return this.http.post('http://127.0.0.1:8000/api/register' , registerData)
  }

//-----------------------------------------------------------------------------------------------

//login-------------------------------------------------------------------------------------------

login(loginData:object):Observable<any>
{
  return this.http.post(`http://127.0.0.1:8000/api/login`,loginData)
}

forgetPass(forgetPass:object):Observable<any>
{
  return this.http.post(`http://127.0.0.1:8000/api/forgetPassword`,forgetPass)
}

logout(): Observable<any> {
  const token = localStorage.getItem('userToken') ?? '';
  const headers = new HttpHeaders().set('access_token', token);
  return this.http.post('http://127.0.0.1:8000/api/logout', {}, { headers });
}
//-------------------------------------------------------------------------------------------------

//contactus----------------------------------------------------------------------------------------
contact(contactData:object):Observable<any>
{
  const token = localStorage.getItem('userToken') ?? '';
  const headers = new HttpHeaders().set('access_token', token);
  return this.http.post('http://127.0.0.1:8000/api/messages',contactData , { headers });

}
}
//---------------------------------------------------------------------------------------------------
