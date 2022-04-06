import { Injectable } from '@angular/core';
import { IconServiceInterface } from './icon-service.type';
import { IconService } from './icon.service';

// Esse serviço não está sendo "provided" em nenhum lugar
export class OptionalService implements IconServiceInterface {

  constructor(private iconService: IconServiceInterface) { }

  getIcon() {
    return this.iconService.getIcon() || '⛵'
  }
}
