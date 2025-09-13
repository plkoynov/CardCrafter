import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutComponentBuilderService } from '../../../../core/services/layout-component-builder.service';
import { LayoutService } from '../../../../core/services/layout.service';
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
    {
      label: 'Row',
      icon: 'row',
      onClick: () => this.layoutService.addComponent(this.builder.buildRow()),
    },
    {
      label: 'Column',
      icon: 'column',
      onClick: () => this.layoutService.addComponent(this.builder.buildColumn()),
    },
    {
      label: 'Heading',
      icon: 'heading',
      onClick: () => this.layoutService.addComponent(this.builder.buildHeading()),
    },
    {
      label: 'Text',
      icon: 'text',
      onClick: () => this.layoutService.addComponent(this.builder.buildText()),
    },
    {
      label: 'Link',
      icon: 'link',
      onClick: () => this.layoutService.addComponent(this.builder.buildLink()),
    },
    {
      label: 'Image',
      icon: 'image',
      onClick: () => this.layoutService.addComponent(this.builder.buildImage()),
    },
  ];

  constructor(
    private layoutService: LayoutService,
    private builder: LayoutComponentBuilderService,
  ) {}
}
