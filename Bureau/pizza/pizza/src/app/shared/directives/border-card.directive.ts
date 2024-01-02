import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appPizzaBorderCard]'
})
export class BorderCardDirective {

  @Input('appPizzaBorderCard') borderColor: String | undefined

  // Couleurs des bordures
  WET_ASPHALT_COLOR = "#34495e";
  BELIZE_COLOR = "#2980b9";

  constructor(private element: ElementRef) {
    this.setBorder(this.WET_ASPHALT_COLOR);
    this.setHeight(180);
  }

  private setBorder(color: String): void {
    const border = 'solid 4px' + color;
    this.element.nativeElement.style.border = border;
  }

  private setHeight(height: Number): void {
    this.element.nativeElement.style.height = height + 'px';
  }

  @HostListener('mouseenter') OnMouseEnter() {

    this.setBorder(this.BELIZE_COLOR);
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.setBorder(this.WET_ASPHALT_COLOR);
  }

}
