import { Component, DoCheck, Input } from '@angular/core';

import { Dev, SeniorityLevel } from '../../../dev.model';

@Component({
  selector: 'app-dev-card-v6',
  templateUrl: './dev-card-v6.component.html',
})
export class DevCardV6Component implements DoCheck {
  @Input() public dev!: Dev;

  public seniorityLevel!: SeniorityLevel;

  private get skill(): number {
    return this.dev.skill;
  }

  ngDoCheck() {
    console.log('ngDoCheck called');

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
