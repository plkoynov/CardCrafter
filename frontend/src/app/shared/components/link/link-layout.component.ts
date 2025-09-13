import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkComponent } from '../../../models/layout.model';

@Component({
  selector: 'cc-link',
  templateUrl: './link-layout.component.html',
  styleUrls: ['./link-layout.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LinkLayoutComponent {
  @Input() model!: LinkComponent;
}
