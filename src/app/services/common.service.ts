import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  setData(data: any): void {
    this.dataSubject.next(data);
  }
  
}
