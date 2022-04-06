import { Component, HostBinding, OnInit } from '@angular/core';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-skip-self-child',
  templateUrl: './skip-self-child.component.html',
  styleUrls: ['./skip-self-child.component.css']
})
export class SkipSelfChildComponent implements OnInit {

  constructor(public iconService: IconService) { }

  @HostBinding('class.componente')
  classe = true

  ngOnInit(): void {
  }

  getIcon() {
    return this.iconService.getIcon()
  }
}
