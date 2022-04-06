import { Component, HostBinding, OnInit, Optional, Self } from '@angular/core';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-self-optional',
  templateUrl: './self-optional.component.html',
  styleUrls: ['./self-optional.component.css']
})
export class SelfOptionalComponent implements OnInit {

  constructor(@Self() @Optional() public iconService?: IconService) { }

  @HostBinding('class.componente')
  classe = true

  ngOnInit(): void {
  }

  getIcon() {
    return this.iconService?.getIcon() || '🧮 '
  }

}
