import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kb-event-card',
  templateUrl: './kb-event-card.component.html',
  styleUrls: ['./kb-event-card.component.scss'],
})
export class KbEventCardComponent {
  @Input()
  cardTitle!: string;

  @Input()
  cardBody!: string[];

  @Input()
  cardFooter!: string | number;
}
