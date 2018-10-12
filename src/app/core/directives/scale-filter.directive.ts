import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScaleFilter]'
})
export class ScaleFilterDirective {
  private isClicked: boolean = false;

  constructor(private el: ElementRef) { }
  
  @HostListener('click')
  click() {
    this.isClicked = !this.isClicked;
    this.toggle.emit(this.isClicked);
  }

  @Output('toggle') 
  toggle: EventEmitter<boolean> = new EventEmitter();
}
