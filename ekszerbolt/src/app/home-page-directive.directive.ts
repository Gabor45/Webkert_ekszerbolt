import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHomePageDirective]'
})
export class HomePageDirectiveDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#578e39');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
