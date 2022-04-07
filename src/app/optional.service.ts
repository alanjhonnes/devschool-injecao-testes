import { Injectable, Optional } from '@angular/core';
import { IconServiceInterface } from './icon-service.type';
import { IconService } from './icon.service';

// Esse serviço não está sendo "provided" em nenhum lugar
@Injectable({
  providedIn: 'root'
})
export class OptionalService implements IconServiceInterface {

  constructor(@Optional() private iconService?: IconService) { }

  getIcon() {
    return this.iconService?.getIcon() || '⛵'
  }
}
