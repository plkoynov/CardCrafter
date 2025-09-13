import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeadingComponent } from '../../../models/layout.model';

@Component({
  selector: 'cc-heading',
  templateUrl: './heading-layout.component.html',
  styleUrls: ['./heading-layout.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HeadingLayoutComponent {
  @Input() model!: HeadingComponent;
}
