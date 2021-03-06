import { PaggingService } from './pagging.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ShipperService {


  //API來源名稱
  serverName:string='http://localhost:54514/'

  //取回的內容
  datas:any=[];
  error:any;
  currentData:any={};   //被選取作用中的單筆資料
  editMode:string='';   //記錄編輯模式為何？Edit:編輯中, AddNew:新增中,空字串為非作用中，初始值為''非作用中。

  pgObjIdx:number;


  constructor(private http:Http, private svcPagging:PaggingService) {

  }


  GetDatasByPage(){
    let url:string=this.serverName + 'api/prod/' + this.svcPagging.pageObjs[this.pgObjIdx].currentPageNum.toString() + '/' + this.svcPagging.pageObjs[this.pgObjIdx].pageSize.toString();
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});

    this.http.get(url, options)
    .subscribe(
      (value:Response)=>{
        let jData:any;
        jData = value.json();
        this.datas = jData.oPages;
        this.svcPagging.pageObjs[this.pgObjIdx].totalPage = jData.TotalPage;
        this.svcPagging.pageObjs[this.pgObjIdx].set_pageNumArray();
      },
      (error)=>{
        this.error = error;
      }
    );
  }

}
