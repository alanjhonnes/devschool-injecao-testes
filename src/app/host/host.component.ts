import { Component, Host, HostBinding, OnInit, Optional } from '@angular/core';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
  providers: [
    {
      provide: IconService,
      useValue: <IconService>{
        getIcon: () => '✈'
      }
    }
  ]
})
export class HostComponent implements OnInit {

  constructor(@Host() public iconService: IconService) { }

  @HostBinding('class.componente')
  classe = true

  ngOnInit(): void {
  }

  getIcon() {
    return this.iconService?.getIcon() || '🚀'
  }

}
