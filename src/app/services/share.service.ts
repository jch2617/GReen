import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { ICoords } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class ShareService {

  userSubmittedLocation: boolean = false;
  viewRefuse: boolean = false;
  closeDialog: boolean = false;
  
  private userLocation = new BehaviorSubject({
    // default map view
    coords: {
      lat: 42.9634,
      lng: -85.6681
    },
    zoom: 11
  })

  constructor() { }

  closingDialog() {
    this.closeDialog = true;
  }

  setLocation(data: ICoords) {

    // HERE NEEDS TO COMMUNICATE WITH PICK UP
    
    this.userSubmittedLocation = true;
    this.userLocation.next(data)
  }
  
  getLocation(): Observable<ICoords> {
    return this.userLocation.asObservable()
  }

  setRoutesView(isRefuse: boolean) {
    this.viewRefuse = isRefuse;
  }

  

}