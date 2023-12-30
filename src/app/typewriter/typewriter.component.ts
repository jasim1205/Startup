import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit, OnDestroy {
  private texts = ["Creative Innovative Digital Solution", "Your Imagination, Our Digital Innovation.", "Digital Ingenuity for a Creative Tomorrow."];
  private currentTextIndex = 0;
  private interval: any;
  private isTyping = false;
  private isErasing = false;

  constructor(private renderer: Renderer2, private el: ElementRef) { }
 
  ngOnInit(): void {
    setTimeout(() => this.typeText(this.ngOnDestroy()), 1000);
    
  }

  ngOnDestroy(): string {
    return this.texts[Math.floor(Math.random() * this.texts.length)];
  }

  typeText(text:any, reverse = false) {
    let randomTextElement = this.el.nativeElement.querySelector('#random-text');
    let i = reverse ? text.length : 0;
    const interval = setInterval(() => {
      randomTextElement.textContent = reverse ? (i === 0 ? "" : text.substring(0, i) + "|") : text.substring(0, i) + (i === text.length ? "" : "|");
      if (reverse) {
        i--;
        if (i < 0) {
          clearInterval(interval);
          setTimeout(() => {
            this.typeText(this.ngOnDestroy(), false);
          }, 1000);
        }
      } else {
        i++;
        if (i > text.length) {
          clearInterval(interval);
          setTimeout(() => {
            this.typeText(text, true);
          }, 1000);
        }
      }
    }, 100);
  }
}
