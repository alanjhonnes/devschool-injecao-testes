import { Injectable } from '@angular/core';
import { IconServiceInterface } from './icon-service.type';

// Esse serviço não está sendo "provided" em nenhum lugar
@Injectable()
export class OptionalService implements IconServiceInterface {

  constructor() { }

  getIcon() {
    return '⛵'
  }
}
