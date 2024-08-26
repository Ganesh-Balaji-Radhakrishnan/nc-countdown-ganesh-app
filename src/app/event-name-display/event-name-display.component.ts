import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-event-name-display',
  templateUrl: './event-name-display.component.html',
  styleUrls: ['./event-name-display.component.scss'],
})
export class EventNameDisplayComponent implements OnChanges {
  @Input() eventName: string = '';
  fontSize: string = '2rem';

  @ViewChild('eventText', { static: false }) divEventText:
    | ElementRef
    | undefined;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventName']) {
      this.adjustFontSize();
    }
  }

  adjustFontSize() {
    const length = this.eventName.length;
    let fontSize: number; // Base size in rem

    switch (true) {
      case length === 0:
        fontSize = 5;
        break;
      case length <= 10:
        fontSize = 5;
        break;
      case length <= 20:
        fontSize = 3;
        break;
      case length <= 30:
        fontSize = 2;
        break;
      case length <= 40:
        fontSize = 1.5;
        break;
      case length <= 50:
        fontSize = 1;
        break;
      default:
        fontSize = 0.9;
        break;
    }

    this.fontSize = `${fontSize}rem`;

    // Check if `divEventText` is available before applying styles
    if (this.divEventText) {
      this.renderer.setStyle(
        this.divEventText.nativeElement,
        'font-size',
        this.fontSize,
      );
    } else {
      // Alternatively, apply styles to the host element
      this.renderer.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
    }
  }
}
