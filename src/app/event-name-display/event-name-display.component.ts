import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  Renderer2,
  ViewChild,
  HostListener,
} from '@angular/core'
import { CountdownService } from '../countdown.service'
import { FontSizeService } from '../font-size.service'

@Component({
  selector: 'app-event-name-display',
  templateUrl: './event-name-display.component.html',
  styleUrls: ['./event-name-display.component.scss'],
})
export class EventNameDisplayComponent implements OnChanges {
  @Input() eventName: string = ''
  placeholder: string = 'Interivew at NC'
  fontSize: string = '5rem'

  @ViewChild('eventText', { static: false }) divEventText:
    | ElementRef
    | undefined

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private countdownService: CountdownService,
    private fontSizeService: FontSizeService,
  ) {}

  ngOnInit() {
    this.countdownService.getEventName().subscribe((eventName) => {
      this.eventName = eventName
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventName']) {
      this.adjustFontSize()
    }
  }

  adjustFontSize() {
    const screenWidth = window.innerWidth
    this.fontSize = this.fontSizeService.getFontSize(
      this.eventName,
      screenWidth,
    )

    if (this.divEventText) {
      this.renderer.setStyle(
        this.divEventText.nativeElement,
        'font-size',
        this.fontSize,
      )
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'font-size', this.fontSize)
    }
  }
}
