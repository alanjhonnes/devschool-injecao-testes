import { Component, HostBinding, OnInit } from '@angular/core';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-host-parent',
  templateUrl: './host-parent.component.html',
  styleUrls: ['./host-parent.component.css']
})
export class HostParentComponent implements OnInit {

  constructor(public iconService?: IconService) { }

  @HostBinding('class.componente')
  classe = true

  ngOnInit(): void {
  }

  getIcon() {
    return this.iconService?.getIcon() || '⏰ '
  }

}
