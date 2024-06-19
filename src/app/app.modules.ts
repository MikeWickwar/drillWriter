import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../env/env';
import { AppComponent } from './app.component';
import { FieldViewComponent } from './field-view/field-view.component';
import { PlayerManagementComponent } from './player-management/player-management.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    FieldViewComponent,
    PlayerManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    DragDropModule,
    FieldViewComponent,
    PlayerManagementComponent
    // Other imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
