import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../env/env';
import { AppComponent } from './app.component';
import { FieldViewComponent } from './components/field-view/field-view.component';
import { PlayerManagementComponent } from './components/player-management/player-management.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SetManagementComponent } from './components/set-management/set-management.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldViewComponent,
    PlayerManagementComponent,
    SetManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FieldViewComponent,
    PlayerManagementComponent,
    SetManagementComponent
    // Other imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
