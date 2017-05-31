import { PaggingService } from './../pagging.service';
import { ProdService } from './../prod.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  constructor(private svcData:ProdService
    ,private svcPagging:PaggingService
    ,private route:ActivatedRoute
    ) { }

  ngOnInit() {
   this.route.queryParams.subscribe((value)=>{
      if(value['pgNum']==null){
        this.svcPagging.pageObjs[0].currentPageNum=1;
      }else{
        this.svcPagging.pageObjs[0].currentPageNum=parseInt(value['pgNum']);
      }
      //console.log(this.svcPagging.pageObjs[0].currentPageNum);
      if(value['pgSize']!=null){
        this.svcPagging.pageObjs[0].pageSize = parseInt(value['pgSize']);
      }
      this.svcData.GetDatasByPage();
    });
  }

}
