import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LinkComponent } from '../../../models/layout.model';
import { BaseLayoutComponent } from '../base/base-layout.component';

@Component({
  selector: 'cc-link',
  templateUrl: './link-layout.component.html',
  styleUrls: ['./link-layout.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LinkLayoutComponent extends BaseLayoutComponent<LinkComponent> {}
