import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangetext]'
})
export class ChangetextDirective {

  constructor(private el: ElementRef) { }

  // @Input() speed: number;
  @HostListener("mouseenter") onMouseEnter(){
    (this.el.nativeElement as HTMLElement).style.backgroundColor ="pink"
  }
  @HostListener("mouseleave") onMouseLeaves(){
    (this.el.nativeElement as HTMLElement).style.backgroundColor ="yellow"
  }
}
