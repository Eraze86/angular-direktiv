import { Attribute, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangetext]'
})
export class ChangetextDirective {

  constructor(private el: ElementRef) { }

  @Input("appChangetext") speed: number = 0;
  @HostListener("mouseenter") onMouseEnter(){
    (this.el.nativeElement as HTMLElement).style.backgroundColor ="pink";
  
  }
  @HostListener("mouseleave") onMouseLeaves(){
    (this.el.nativeElement as HTMLElement).style.backgroundColor ="yellow"
  }
  @HostListener("click") onclick(){
    (this.el.nativeElement as HTMLElement).style.backgroundColor ="lightblue"
  }
}
