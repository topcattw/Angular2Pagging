import { PaggingObj } from './pagging-obj';
import { Injectable } from '@angular/core';

@Injectable()
export class PaggingService {

  pageObjs:PaggingObj[]=[];

  constructor() {
  }


  CreatePObj(){
    let pObj:PaggingObj = new PaggingObj;
    this.pageObjs.push(pObj);
  }



}
