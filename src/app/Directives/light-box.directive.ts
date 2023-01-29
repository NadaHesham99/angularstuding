import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {
  @Input('LightBox') highLightColor:string = "yellow";
  @Input() defaultColr:string = "white"

  constructor(private eleRef:ElementRef) {
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.eleRef.nativeElement.style.border = `2px solid ${this.defaultColr}`
  }
   
   @HostListener('mouseover') onMouseOver(){
    this.eleRef.nativeElement.style.border = `3px solid ${this.highLightColor}`
   }
   @HostListener('mouseout') onMouseOut(){
    this.eleRef.nativeElement.style.border = `2px solid ${this.defaultColr}`
   }
}
