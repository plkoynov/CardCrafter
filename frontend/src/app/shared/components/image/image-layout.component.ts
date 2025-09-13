import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from '../../../models/layout.model';
import { BaseLayoutComponent } from '../base/base-layout.component';

@Component({
  selector: 'cc-image',
  templateUrl: './image-layout.component.html',
  styleUrls: ['./image-layout.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ImageLayoutComponent extends BaseLayoutComponent<ImageComponent> {}
