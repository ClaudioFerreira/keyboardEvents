import { Component, HostListener } from '@angular/core';

export interface kbEvent {
  code: string,
  key: string,
  keyCode: number
}

@Component({
  selector: 'app-keyboard-event-detector',
  templateUrl: './keyboard-event-detector.component.html',
  styleUrls: ['./keyboard-event-detector.component.scss'],
})


export class KeyboardEventDetectorComponent {
  key!: kbEvent;

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.key = event
    console.log(event);
  }
}
