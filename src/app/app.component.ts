import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms'; 
import { FieldViewComponent } from './field-view/field-view.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            FormsModule,
            DragDropModule,
            FieldViewComponent
     ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'marching-band-drill-writer';
}
