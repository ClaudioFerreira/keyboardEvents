import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { KeyboardEventDetectorComponent } from './pages/keyboard-event-detector/keyboard-event-detector.component';
import { KbEventCardComponent } from './pages/keyboard-event-detector/components/kb-event-card/kb-event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KeyboardEventDetectorComponent,
    KbEventCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
