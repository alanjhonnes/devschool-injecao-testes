import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }

  getIcon() {
    return '🌸'
  }
}
