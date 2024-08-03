// set-management.component.ts
import { Component } from '@angular/core';
import { SetService } from '../../services/sets/sets.service';
import { Set } from '../../models/set.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-set-management',
  templateUrl: './set-management.component.html',
  styleUrls: ['./set-management.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class SetManagementComponent {
  newSetName = '';
  newSetCount = 8; // Default count

  constructor(public setService: SetService) {}

  addSet() {
    const newSet: Set = {
      id: Date.now(), // Simple unique ID
      name: this.newSetName,
      count: this.newSetCount,
      players: {}
    };
    this.setService.addSet(newSet);
  }
}
