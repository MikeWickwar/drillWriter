// draggable.directive.ts
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '.appDraggable'
})
export class DraggableDirective {
  @Input('.appDraggable') dragData: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  debugger

    this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'true');
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent) {
    debugger
    event.dataTransfer?.setData('text/plain', JSON.stringify(this.dragData));
  }
}
