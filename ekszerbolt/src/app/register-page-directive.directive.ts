import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appRegisterPageDirective]'
})
export class RegisterPageDirectiveDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'black';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#578e39');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
