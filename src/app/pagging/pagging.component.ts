import { Router} from '@angular/router';
import { PaggingService } from './../pagging.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagging',
  templateUrl: './pagging.component.html',
  styleUrls: ['./pagging.component.css']
})
export class PaggingComponent implements OnInit {

  @Input() pgObjIdx:number;

  constructor(private svcPagging:PaggingService,private router:Router) { }

  ngOnInit() {
  }

  //設定第幾頁，透過queryParams傳遞第幾個分頁
  setPgNum(pgNum:number){
    this.svcPagging.pageObjs[0].currentPageNum = pgNum;
    this.router.navigate(['prod'],{queryParams:{pgNum:pgNum}});
  }

  //設定分頁的筆數，透過queryParams傳遞第幾個分頁，分頁的筆數
  setPgSize(){
    this.router.navigate(
      ['prod'],
      {
        queryParams:{
          pgNum:this.svcPagging.pageObjs[0].currentPageNum,
          pgSize:this.svcPagging.pageObjs[0].pageSize
        }
      }
    );
  }

}
