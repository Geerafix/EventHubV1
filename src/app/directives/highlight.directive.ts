import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() _color: string = '#f7f7e4';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.15s');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this._color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  highlight(color: string | null) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
  }
}
