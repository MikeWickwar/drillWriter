import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FieldViewComponent } from './components/field-view/field-view.component';
import { PlayerManagementComponent } from './components/player-management/player-management.component';
import { SetManagementComponent } from './components/set-management/set-management.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            FormsModule,
            FieldViewComponent,
            PlayerManagementComponent,
            SetManagementComponent
     ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'marching-band-drill-writer';
}
