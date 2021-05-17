import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routeUrl: ''
  });

  constructor() { }

  getHeaderData(): HeaderData {
    return this._headerData.value;
  }

  setHeaderData(hd: HeaderData): void {
    this._headerData.next(hd);
  }
}
