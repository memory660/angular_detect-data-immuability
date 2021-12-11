import { Pipe, PipeTransform } from "@angular/core";

import { SeniorityLevel } from "../../dev.model";

@Pipe({
  name: "seniorityLevel"
})
export class SeniorityLevelPipe implements PipeTransform {
  transform(skill: number): SeniorityLevel {
    return this.getSeniorityLevel(skill);
  }

  private getSeniorityLevel(skill: number): SeniorityLevel {
    if (skill < 40) {
      return SeniorityLevel.Junior;
    }

    if (skill >= 40 && skill < 80) {
      return SeniorityLevel.Regular;
    }

    return SeniorityLevel.Senior;
  }
}
