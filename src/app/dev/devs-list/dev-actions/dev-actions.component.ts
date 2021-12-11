import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-dev-actions",
  templateUrl: "./dev-actions.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevActionsComponent {
  @Output() public skillChange = new EventEmitter<boolean>();

  public changeSkill(increase: boolean): void {
    this.skillChange.emit(increase);
  }
}
