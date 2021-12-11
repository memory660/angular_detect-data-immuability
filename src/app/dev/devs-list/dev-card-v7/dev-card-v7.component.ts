import { Component, Input } from '@angular/core';

import { Dev } from '../../../dev.model';

@Component({
  selector: 'app-dev-card-v7',
  templateUrl: './dev-card-v7.component.html',
})
export class DevCardV7Component {
  @Input() public dev!: Dev;
}
