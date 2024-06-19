import { AfterViewInit, Component } from '@angular/core';
import { MetronomeService } from '../metronome.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-field-view',
  templateUrl: './field-view.component.html',
  styleUrls: ['./field-view.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class FieldViewComponent implements AfterViewInit {
  players = [
    { id: 1, name: 'Player 1', color: 'blue', position: { x: 0, y: 0 } },
    { id: 2, name: 'Player 2', color: 'red', position: { x: 0, y: 1 } },
    // More players
  ];

  tempo: number = 120;

  ngAfterViewInit() {
    this.generateCircles();
  }

  generateCircles() {
    const svg = document.getElementsByClassName('field-svg');
    const startX = 10;
    const startY = 3;
    const xIncrement = 2.5;
    const yIncrement = 2.5;
    const circleRadius = 0.2;
    const circleColor = 'white';
    const circleStrokeWidth = 0.2;
    const gridDotOpacity = "0.4";
    for (let x = startX; x <= 110; x += xIncrement) {
      for (let y = startY; y <= 50; y += yIncrement) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x.toString());
        circle.setAttribute("cy", y.toString());
        circle.setAttribute("r", circleRadius.toString());
        circle.setAttribute("fill", "none");
        circle.setAttribute("stroke", circleColor);
        circle.setAttribute("opacity", "0.4");
        circle.setAttribute("stroke-width", circleStrokeWidth.toString());
        svg[0].appendChild(circle);
      }
    }
  }

  constructor(private metronomeService: MetronomeService) {}

  // drop(event: CdkDragDrop<string[]>) {
    drop() {
    // if(event.previousIndex == null){
    //   event.previousIndex = 0
    // }
    // if(event.currentIndex == null){
    //   event.currentIndex = 0
    // }
    moveItemInArray(this.players, 0, 0);
  }

  toggleMetronome() {
    this.metronomeService.start();  
  }

  updateTempo() {
    this.metronomeService.setTempo(this.tempo);
  }
}
