import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {
 
  id: any;
  username:any;
  page:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.username = this.route.snapshot.paramMap.get('username');
    this.page=this.route.snapshot.queryParamMap.get('page');
    // this.route.paramMap.subscribe(params=> {
    //   this.id = params.get('username')?.toString()||0;
    //   this.username=params.get('username')
    // })
    // this.route.queryParamMap.subscribe(queryParams=>{
    //   console.log(queryParams.get('type'));
    // })
  }

}
