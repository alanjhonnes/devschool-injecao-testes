import { Component, HostBinding, OnInit, Optional } from '@angular/core';
import { OptionalService } from '../optional.service';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.css']
})
export class OptionalComponent implements OnInit {

  constructor(@Optional() public optionalService: OptionalService) { }

  @HostBinding('class.componente')
  classe = true

  ngOnInit(): void {
  }

  getIcon() {
    return this.optionalService?.getIcon() || '🧀 '
  }

}
