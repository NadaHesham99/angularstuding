import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {
  @Input('LightBox') highLightColor:string = "yellow";
  @Input() defaultColr:string = "darkblue"

  constructor(private eleRef:ElementRef) {
      this.eleRef.nativeElement.style.border = `2px solid ${this.defaultColr}`
   }

   @HostListener('mouseover') onMouseOver(){
    this.eleRef.nativeElement.style.border = `3px solid ${this.highLightColor}`
   }
   @HostListener('mouseout') onMouseOut(){
    this.eleRef.nativeElement.style.border = `2px solid ${this.defaultColr}`
   }
}
