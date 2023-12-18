import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scale]',
  standalone: true
})
export class ScaleDirective {
  @Input() _scale: number = 1.03;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.3s');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.scale(this._scale);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scale(1);
  }

  scale(scale: number) {
    this.renderer.setStyle(this.element.nativeElement, 'transform', `scale(${scale})`);
  }
}
