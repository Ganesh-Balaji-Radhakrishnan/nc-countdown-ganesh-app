import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class FontSizeService {
  constructor() {}

  getFontSize(eventName: string, screenWidth: number): string {
    const length = eventName.length
    let fontSize = 5

    let fontSizeSteps

    if (screenWidth <= 600) {
      fontSizeSteps = [
        { maxLen: 0, size: 2 },
        { maxLen: 5, size: 5 },
        { maxLen: 8, size: 4.8 },
        { maxLen: 9, size: 4.5 },
        { maxLen: 11, size: 3.8 },
        { maxLen: 12, size: 3.3 },
        { maxLen: 14, size: 3 },
        { maxLen: 16, size: 2.8 },
        { maxLen: 20, size: 2.3 },
        { maxLen: Infinity, size: 1.8 },
      ]
    } else if (screenWidth <= 899) {
      fontSizeSteps = [
        { maxLen: 0, size: 4.5 },
        { maxLen: 12, size: 8 },
        { maxLen: 15, size: 7 },
        { maxLen: 17, size: 6 },
        { maxLen: 20, size: 5 },
        { maxLen: 22, size: 4.5 },
        { maxLen: Infinity, size: 4 },
      ]
    } else if (screenWidth <= 1199) {
      fontSizeSteps = [
        { maxLen: 0, size: 6.5 },
        { maxLen: 14, size: 9 },
        { maxLen: 15, size: 8.5 },
        { maxLen: 17, size: 8 },
        { maxLen: 18, size: 7.4 },
        { maxLen: 20, size: 6.8 },
        { maxLen: 22, size: 6.3 },
        { maxLen: 24, size: 5.5 },
        { maxLen: 28, size: 4.8 },
        { maxLen: Infinity, size: 4.5 },
      ]
    } else if (screenWidth <= 1399) {
      fontSizeSteps = [
        { maxLen: 0, size: 7.5 },
        { maxLen: 12, size: 12 },
        { maxLen: 14, size: 11 },
        { maxLen: 16, size: 10 },
        { maxLen: 18, size: 8.8 },
        { maxLen: 20, size: 7.8 },
        { maxLen: 22, size: 7.5 },
        { maxLen: 24, size: 6.5 },
        { maxLen: 26, size: 6 },
        { maxLen: 28, size: 5.5 },
        { maxLen: 30, size: 5 },
        { maxLen: 34, size: 4.5 },
        { maxLen: Infinity, size: 3.5 },
      ]
    } else if (screenWidth <= 1599) {
      fontSizeSteps = [
        { maxLen: 0, size: 7.5 },
        { maxLen: 12, size: 12 },
        { maxLen: 13, size: 11 },
        { maxLen: 16, size: 10 },
        { maxLen: 19, size: 8.8 },
        { maxLen: 21, size: 7.8 },
        { maxLen: 22, size: 7.5 },
        { maxLen: 24, size: 6.5 },
        { maxLen: 26, size: 6 },
        { maxLen: 28, size: 5.5 },
        { maxLen: 30, size: 5 },
        { maxLen: 32, size: 4.5 },
        { maxLen: 34, size: 4.3 },
        { maxLen: 36, size: 4.0 },
        { maxLen: 38, size: 3.8 },
        { maxLen: Infinity, size: 3.5 },
      ]
    } else {
      fontSizeSteps = [
        { maxLen: 0, size: 8.8 },
        { maxLen: 18, size: 11 },
        { maxLen: 20, size: 10 },
        { maxLen: 22, size: 9 },
        { maxLen: 26, size: 8 },
        { maxLen: 30, size: 7 },
        { maxLen: 34, size: 6 },
        { maxLen: 38, size: 5.5 },
        { maxLen: 42, size: 5 },
        { maxLen: 46, size: 4.5 },
        { maxLen: 50, size: 4 },
      ]
    }

    for (const step of fontSizeSteps) {
      if (length <= step.maxLen) {
        fontSize = step.size
        break
      }
    }

    return `${fontSize}rem`
  }
}
