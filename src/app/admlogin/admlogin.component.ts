import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admlogin',
  templateUrl: './admlogin.component.html',
  styleUrls: ['./admlogin.component.css']
})
export class AdmloginComponent {

  constructor(private route:Router){
    localStorage.removeItem("userInfo");
  }
  username = ""
  password = ""
  
  readValues = ()=>{
    if(this.username=="admin"&&this.password=="12345"){
      alert("Logged in")
      this.route.navigate(["/dboard"])
    }else{
      alert("Invalid Credentials");
    }

  }

}
