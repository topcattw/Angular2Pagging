import { PaggingObj } from './pagging-obj';
import { Injectable } from '@angular/core';

@Injectable()
export class PaggingService {

  pageObjs:PaggingObj[]=[];

  pObj:PaggingObj;

  constructor() {
    this.pObj = new PaggingObj();
    this.pageObjs.push(this.pObj);
  }






}
