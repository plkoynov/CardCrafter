import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RowComponent } from '../../../models/layout.model';
import { BaseLayoutComponent } from '../base/base-layout.component';
import { HeadingLayoutComponent } from '../heading/heading-layout.component';
import { ImageLayoutComponent } from '../image/image-layout.component';
import { LinkLayoutComponent } from '../link/link-layout.component';
import { TextLayoutComponent } from '../text/text-layout.component';

@Component({
  selector: 'cc-row',
  templateUrl: './row-layout.component.html',
  styleUrls: ['./row-layout.component.scss'],
  imports: [
    CommonModule,
    HeadingLayoutComponent,
    ImageLayoutComponent,
    LinkLayoutComponent,
    TextLayoutComponent,
  ],
})
export class RowLayoutComponent extends BaseLayoutComponent<RowComponent> {}
