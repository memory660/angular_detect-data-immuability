import { Component } from '@angular/core';

import { Dev } from '../../dev.model';

@Component({
  selector: 'app-devs-list',
  templateUrl: './devs-list.component.html',
  styles: [
    `
      .bloc {
        padding: 0 16px;
        border: 1px solid #555555;
        width: 128px;
        float: left;
      }
    `,
  ],
})
export class DevsListComponent {
  public immutableUpdatesActive = false;
  public devs: Dev[] = [
    { id: 1, name: 'Wojtek', skill: 50 },
//    { id: 2, name: 'Tomek', skill: 80 },
  ];

  private skillDelta = 10;

  public onSkillChange(devId: number, increase: boolean): void {
    if (this.immutableUpdatesActive) {
      this.immutableChange(devId, increase);
    } else {
      this.mutableChange(devId, increase);
    }
  }

  private immutableChange(devId: number, increase: boolean): void {
    const multiplier = increase ? 1 : -1;

    this.devs = this.devs.map((dev) =>
      dev.id === devId
        ? {
            ...dev,
            skill: dev.skill + multiplier * this.skillDelta,
          }
        : dev
    );
  }

  private mutableChange(devId: number, increase: boolean): void {
    const dev = this.devs.find(({ id }) => id === devId);

    if (dev) {
      const multiplier = increase ? 1 : -1;

      dev.skill = dev.skill + multiplier * this.skillDelta;
    }
  }
}
