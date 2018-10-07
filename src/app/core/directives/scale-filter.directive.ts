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

  // @HostListener('close')
  // closeDropdown() {
  //   this.close()
  // }

  @Output('toggle') 
  toggle: EventEmitter<boolean> = new EventEmitter();

  // @Output('close')
  // close: EventEmitter<string> = new EventEmitter();
}
