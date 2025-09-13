import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadingComponent } from '../../../models/layout.model';
import { BaseLayoutComponent } from '../base/base-layout.component';

@Component({
  selector: 'cc-heading',
  templateUrl: './heading-layout.component.html',
  styleUrls: ['./heading-layout.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HeadingLayoutComponent extends BaseLayoutComponent<HeadingComponent> {}
