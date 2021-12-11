import { Component, Input } from '@angular/core';

import { Dev } from '../../../dev.model';

@Component({
  selector: 'app-dev-card-v2',
  templateUrl: './dev-card-v2.component.html',
})
export class DevCardV2Component {
  @Input() public dev!: Dev;
}
