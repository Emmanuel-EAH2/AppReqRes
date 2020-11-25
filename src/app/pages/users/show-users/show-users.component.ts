import { Component, OnInit } from '@angular/core';
import { AppReqService } from 'src/app/services/Service/app-req.service'

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
 
  data: any;
  constructor(private AppS: AppReqService) { }
  
  ngOnInit(): void {
   this.AppS.getListData().subscribe(data =>{
        console.log(data);
      });
    }
  } 

