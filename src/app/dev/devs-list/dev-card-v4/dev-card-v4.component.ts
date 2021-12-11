import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Dev, SeniorityLevel } from '../../../dev.model';

@Component({
  selector: 'app-dev-card-v4',
  templateUrl: './dev-card-v4.component.html',
})
export class DevCardV4Component {
  @Input() public set dev(val: Dev) {
    this._dev = val;
    this.seniorityLevel = this.getSeniorityLevel();
  }

  public get dev(): Dev {
    return this._dev;
  }

  public seniorityLevel!: SeniorityLevel;

  private _dev!: Dev;

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
