import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Dev, SeniorityLevel } from '../../../dev.model';
@Component({
  selector: 'app-dev-card-v5',
  templateUrl: './dev-card-v5.component.html',
})
export class DevCardV5Component {
  @Input() public dev!: Dev;

  public get seniorityLevel(): SeniorityLevel {
    console.log('seniorityLevel getter called');

    return this.getSeniorityLevel();
  }

  private get skill(): number {
    return this.dev.skill;
  }

  private getSeniorityLevel(): SeniorityLevel {
    if (this.skill < 40) {
      return SeniorityLevel.Junior;
    }

    if (this.skill >= 40 && this.skill < 80) {
      return SeniorityLevel.Regular;
    }

    return SeniorityLevel.Senior;
  }
}
