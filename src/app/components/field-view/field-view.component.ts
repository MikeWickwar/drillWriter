import { AfterViewInit, Component } from '@angular/core';
import { MetronomeService } from '../../services/metronome/metronome.service';
import { CommonModule } from '@angular/common';
import { PlayerManagementComponent } from '../player-management/player-management.component';
import { PlayerService } from '../../services/player/player.services';
import { SetService } from '../../services/sets/sets.service';
import { Set } from '../../models/set.model';

@Component({
  selector: 'app-field-view',
  templateUrl: './field-view.component.html',
  styleUrls: ['./field-view.component.scss'],
  imports: [CommonModule, PlayerManagementComponent],
  standalone: true
})
export class FieldViewComponent implements AfterViewInit {

  tempo: number = 120;
  players: any;
  sets: Set[] = [];
  currentSet: Set | null = null;

  ngAfterViewInit() {
    this.createYardLines();
    this.createYardMarkers();
    this.createHashMarks();
    this.generateGridDots();
    this.players = this.playerService.players$

    this.setService.sets$.subscribe(sets => {
      this.sets = sets;
      if (sets.length > 0) {
        this.currentSet = sets[0]; // Start with the first set
      }
    });
  }

  constructor(private playerService: PlayerService, private metronomeService: MetronomeService,  private setService: SetService,) {}

  onDragMoved(event: any, player: any) {

    debugger
  }

  generateGridDots() {
    const svg = document.getElementsByClassName('field-svg'),
          startX = 10,
          startY = 0,
          endX = 110,
          endY = 55,
          xIncrement = 2.5,
          yIncrement = 2.5,
          circleRadius = 0.1,
          circleColor = '#2F4F4F',
          circleStrokeWidth = 0.2,
          gridDotOpacity = "0.4";

    for (let x = startX; x <= endX; x += xIncrement) {
        for (let y = endY; y >= startY; y -= yIncrement) {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", x.toString());
            circle.setAttribute("cy",  (y + .8).toString()); //.8 to move the grid to align with the bottom sl
            circle.setAttribute("r", circleRadius.toString());
            circle.setAttribute("fill", "none");
            circle.setAttribute("stroke", circleColor);
            circle.setAttribute("opacity", gridDotOpacity);
            circle.setAttribute("stroke-width", circleStrokeWidth.toString());
            svg[0].appendChild(circle);
        }
    }
  }

  createYardLines() {
    const svg = document.getElementById('field-svg');
    if (!svg) return;

    const lineData = [
      10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110,
      15, 25, 35, 45, 55, 65, 75, 85, 95, 105
    ];

    lineData.forEach(x => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', x.toString());
      line.setAttribute('y1', '0');
      line.setAttribute('x2', x.toString());
      line.setAttribute('y2', '53.3');
      line.setAttribute('stroke', 'black');
      line.setAttribute('stroke-width', '0.2');
      svg.appendChild(line);
    });
  }

 createYardMarkers() {
    const svg = document.getElementById('field-svg');
    if (!svg) return;

    const markerData = [
      { x: 15.2, value: 5 },
      { x: 20.2, value: 10 },
      { x: 25.2, value: 15 },
      { x: 30.2, value: 20 },
      { x: 35.2, value: 25 },
      { x: 40.2, value: 30 },
      { x: 45.2, value: 35 },
      { x: 50.2, value: 40 },
      { x: 55.2, value: 45 },
      { x: 60.2, value: 50 },
      { x: 65.2, value: 45 },
      { x: 70.2, value: 40 },
      { x: 75.2, value: 35 },
      { x: 80.2, value: 30 },
      { x: 85.2, value: 25 },
      { x: 90.2, value: 20 },
      { x: 95.2, value: 15 },
      { x: 100.2, value: 10 },
      { x: 105.2, value: 5 }
    ];

    markerData.forEach(marker => {
      // Top markers
      const topText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      topText.setAttribute('x', marker.x.toString());
      topText.setAttribute('y', '13.7');
      topText.setAttribute('fill', '#FFFFFF');
      topText.setAttribute('font-size', '2.5');
      topText.setAttribute('text-anchor', 'middle');
      topText.textContent = marker.value.toString();
      svg.appendChild(topText);

      // Bottom markers
      const bottomText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      bottomText.setAttribute('x', marker.x.toString());
      bottomText.setAttribute('y', '39.6');
      bottomText.setAttribute('fill', '#FFFFFF');
      bottomText.setAttribute('font-size', '2.5');
      bottomText.setAttribute('text-anchor', 'middle');
      bottomText.textContent = marker.value.toString();
      svg.appendChild(bottomText);
    });
  }

 createHashMarks() {
    const svg = document.getElementById('field-svg');
    if (!svg) return;

    const hashData = [
      9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 109
    ];

    hashData.forEach(x => {
      // Top hash marks
      const topLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      topLine.setAttribute('x1', x.toString());
      topLine.setAttribute('y1', '20.7');
      topLine.setAttribute('x2', (x + 2).toString());
      topLine.setAttribute('y2', '20.7');
      topLine.setAttribute('stroke', '#FFFFFF');
      topLine.setAttribute('stroke-width', '0.2');
      svg.appendChild(topLine);

      // Bottom hash marks
      const bottomLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      bottomLine.setAttribute('x1', x.toString());
      bottomLine.setAttribute('y1', '32.6');
      bottomLine.setAttribute('x2', (x + 2).toString());
      bottomLine.setAttribute('y2', '32.6');
      bottomLine.setAttribute('stroke', '#FFFFFF');
      bottomLine.setAttribute('stroke-width', '0.2');
      svg.appendChild(bottomLine);
    });
  }

  toggleMetronome() {
    this.metronomeService.start();
  }

  updateTempo() {
    this.metronomeService.setTempo(this.tempo);
  }
}
