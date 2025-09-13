import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageComponent } from '../../../models/layout.model';

@Component({
  selector: 'cc-image',
  templateUrl: './image-layout.component.html',
  styleUrls: ['./image-layout.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ImageLayoutComponent {
  @Input() model!: ImageComponent;
}
