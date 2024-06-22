import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { PlayerService } from '../../services/player/player.services';

@Component({
  selector: 'app-player-management',
  templateUrl: './player-management.component.html',
  styleUrls: ['./player-management.component.scss'],
  imports: [CommonModule, DragDropModule],
  standalone: true
})
export class PlayerManagementComponent {
  players: { id: number, name: string, color: string, position: { x: number, y: number } }[] = [];
  playerIdCounter = 0;
  playerStartPositionX = 10;
  playerStartPositionY = 10;
  constructor(private playerService: PlayerService, private dragDrop: DragDrop){}

  ngOnInit() {
    this.playerService.players$.subscribe(players => {
      this.players = players;
    });
  }

  addPlayer() {
    console.log("Add player clicked")
    const newPlayer = {
      id: this.playerIdCounter++,
      name: `Player ${this.playerIdCounter}`,
      color: this.getRandomColor(),
      position: { x: this.playerStartPositionX+=1, y: this.playerStartPositionY }
    };
    this.playerService.addPlayer(newPlayer);
    this.renderPlayer(newPlayer);
  }

  removePlayer() {
    const playerToRemove = this.players.pop();
    if (playerToRemove) {
      const playerElement = document.getElementById(`player-${playerToRemove.id}`);
      if (playerElement) {
        playerElement.remove();
      }
    }
  }

  renderPlayer(player: any) {
    const svg = document.getElementById('field-svg');
    if(svg){
      const playerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      playerCircle.setAttribute("cx", player.position.x.toString());
      playerCircle.setAttribute("cy", player.position.y.toString());
      playerCircle.setAttribute("r", "0.5");
      playerCircle.setAttribute("fill", player.color);
      playerCircle.setAttribute("id", `player-${player.id}`);
      playerCircle.setAttribute("class", "cdk-drag player");
      playerCircle.setAttribute("cdkDrag", "");;
      playerCircle.setAttribute("cdkDragData", JSON.stringify(player));;
      playerCircle.addEventListener('cdkDragMoved', (event) => this.onDragMoved(event, player));
      svg.insertAdjacentElement('beforeend', playerCircle);
      const playerElement = svg.querySelector(`#player-${player.id}`);
      if (playerElement) {
        this.dragDrop.createDrag(playerElement as HTMLElement);
      }
    }

  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  onDragMoved(event: DragDropModule, player:{ id: any; name?: string; color: any; position: any; }) {
    const svgRect = (document.getElementsByClassName('field-svg')[0] as SVGElement).getBoundingClientRect();
    debugger
    // player.position.x = event.started - svgRect.left;
    // player.position.y = event.pointerPosition.y - svgRect.top;
  }

  importCSV() {
    // Logic to import players from CSV
  }

  exportCSV() {
    // Logic to export players to CSV
  }
}
