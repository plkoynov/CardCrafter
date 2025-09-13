import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconComponent } from '../../../../shared/ui/icons/svg-icon.component';

@Component({
  selector: 'cc-layout-tree',
  templateUrl: './layout-tree.component.html',
  styleUrls: ['./layout-tree.component.scss'],
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
})
export class LayoutTreeComponent {
  toolboxItems = [
    { label: 'Heading', icon: 'heading' },
    { label: 'Text', icon: 'text' },
    { label: 'Link', icon: 'link' },
    { label: 'Image', icon: 'image' },
    { label: 'Column', icon: 'column' },
    { label: 'Divider', icon: 'divider' },
    { label: 'Background / Shape', icon: 'background-shape' },
  ];
}
