import { Component, HostBinding, OnInit } from '@angular/core';
import { HostParentComponent } from '../host-parent/host-parent.component';
import { HostComponent } from '../host/host.component';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-host-child',
  templateUrl: './host-child.component.html',
  styleUrls: ['./host-child.component.css']
})
export class HostChildComponent implements OnInit {

  constructor(
    public iconService: IconService,
    public host: HostComponent,
    public hostParent: HostParentComponent
  ) { }

  @HostBinding('class.componente')
  classe = true

  ngOnInit(): void {
  }

  getIcon() {
    return this.iconService.getIcon() || '🚀'
  }

}
