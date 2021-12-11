import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Dev, SeniorityLevel } from '../../../dev.model';

@Component({
  selector: 'app-dev-card-v3',
  templateUrl: './dev-card-v3.component.html',
})
export class DevCardV3Component implements OnChanges {
  @Input() public dev!: Dev;

  public seniorityLevel!: SeniorityLevel;

  private get skill(): number {
    return this.dev.skill;
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (!simpleChanges['dev']) {
      return;
    }

    this.seniorityLevel = this.getSeniorityLevel();
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
