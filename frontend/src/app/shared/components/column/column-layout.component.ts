import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ColumnComponent } from '../../../models/layout.model';
import { SvgIconComponent } from '../../ui/icons/svg-icon.component';
import { BaseLayoutComponent } from '../base/base-layout.component';
import { HeadingLayoutComponent } from '../heading/heading-layout.component';
import { ImageLayoutComponent } from '../image/image-layout.component';
import { LinkLayoutComponent } from '../link/link-layout.component';
import { RowLayoutComponent } from '../row/row-layout.component';
import { TextLayoutComponent } from '../text/text-layout.component';

@Component({
  selector: 'cc-column',
  templateUrl: './column-layout.component.html',
  styleUrls: ['./column-layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeadingLayoutComponent,
    ImageLayoutComponent,
    LinkLayoutComponent,
    TextLayoutComponent,
    RowLayoutComponent,
    SvgIconComponent,
  ],
})
export class ColumnLayoutComponent extends BaseLayoutComponent<ColumnComponent> {}
