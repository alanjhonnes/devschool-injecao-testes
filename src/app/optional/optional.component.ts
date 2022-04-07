import { Component, HostBinding, OnInit, Optional } from '@angular/core';
import { IconServiceInterface } from '../icon-service.type';
import { IconService } from '../icon.service';
import { OptionalService } from '../optional.service';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.css'],
  providers: [
    {
      provide: OptionalService,
      useFactory: () => {
        const dependencia: IconServiceInterface = {
          getIcon: () => {
            return '👾 '
          }
        }
        return new OptionalService(dependencia)
      },
      deps: []
    }
  ]
})
export class OptionalComponent implements OnInit {

  constructor(public optionalService?: OptionalService) { }

  @HostBinding('class.componente')
  classe = true

  ngOnInit(): void {
  }

  getIcon() {
    return this.optionalService?.getIcon() || '🧀'
  }

}
