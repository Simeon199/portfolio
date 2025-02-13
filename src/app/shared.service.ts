import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isGermanButtonActiveSource = new BehaviorSubject<boolean>(false);
  isGermanButtonActive$ = this.isGermanButtonActiveSource.asObservable();

  setGermanButtonActive(state: boolean) {
    this.isGermanButtonActiveSource.next(state);
  }
  constructor() { }
}
