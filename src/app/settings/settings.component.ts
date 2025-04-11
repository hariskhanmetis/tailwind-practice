import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  isChangesSaved: boolean = false;

  saveChanges(): void {
    this.isChangesSaved = true;

    setTimeout(() => {
      this.isChangesSaved = false;
    }, 5000);
  }
}
