import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Dev } from '../../../dev.model';

@Component({
  selector: 'app-dev-card-v1',
  templateUrl: './dev-card-v1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevCardV1Component {
  @Input() public dev!: Dev;
}
