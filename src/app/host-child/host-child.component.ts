import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { Config, ConfigToken } from '../config-token.token';
import { HostParentComponent } from '../host-parent/host-parent.component';
import { HostComponent } from '../host/host.component';
import { IconServiceInterface } from '../icon-service.type';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-host-child',
  templateUrl: './host-child.component.html',
  styleUrls: ['./host-child.component.css'],
  providers: [
    {
      provide: IconService,
      useValue: <IconService>{
        getIcon: () => '🔄 '
      }
    }
  ]
})
export class HostChildComponent implements OnInit {

  constructor(
    public iconService: IconService,
    public host: HostComponent,
    public hostParent: HostParentComponent,
    @Inject(ConfigToken) public config: Config,
  ) { }

  @HostBinding('class.componente')
  classe = true

  ngOnInit(): void {
  }

  getIcon() {
    return this.config.appName
    return this.iconService.getIcon() || '🚀'
  }

}
