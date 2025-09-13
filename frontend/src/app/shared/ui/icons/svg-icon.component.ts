import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-icon',
  template: `
    <svg
      class="icon"
      [attr.width]="size"
      [attr.height]="size"
      [style.color]="color"
      [style.fill]="color"
      [style.stroke]="color"
    >
      <use attr.xlink:href="/symbol-defs.svg#{{ icon }}"></use>
    </svg>
  `,
  standalone: true,
})
export class SvgIconComponent {
  @Input() icon!: string;
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
}
