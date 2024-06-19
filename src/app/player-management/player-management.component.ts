import { Component } from '@angular/core';

@Component({
  selector: 'app-player-management',
  templateUrl: './player-management.component.html',
  styleUrls: ['./player-management.component.scss']
})
export class PlayerManagementComponent {
  players = [
    { id: 1, name: 'Player 1', color: 'blue' },
    { id: 2, name: 'Player 2', color: 'red' },
    // More players
  ];

  addPlayer() {
    // Logic to add a player
  }

  importCSV() {
    // Logic to import players from CSV
  }

  exportCSV() {
    // Logic to export players to CSV
  }
}
