import { Component, HostBinding, OnInit, Optional, Self } from '@angular/core';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {

  constructor(@Self() @Optional() public iconService?: IconService) { }

  @HostBinding('class.componente')
  classe = true

  ngOnInit(): void {
  }

  getIcon() {
    return this.iconService?.getIcon() || '🎟 '
  }

}
