import { Component, HostBinding, OnInit, SkipSelf } from '@angular/core';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-skip-self',
  templateUrl: './skip-self.component.html',
  styleUrls: ['./skip-self.component.css'],
  providers: [
    {
      provide: IconService,
      useValue: <IconService>{
        getIcon: () => '🚑 '
      }
    }
  ]
})
export class SkipSelfComponent implements OnInit {

  constructor(@SkipSelf() public iconService: IconService) { }

  @HostBinding('class.componente')
  classe = true

  ngOnInit(): void {
  }

  getIcon() {
    return this.iconService.getIcon()
  }



}
