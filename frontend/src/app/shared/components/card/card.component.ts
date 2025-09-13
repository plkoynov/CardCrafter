import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardLayout } from '../../../models/layout.model';
import { ColumnLayoutComponent } from '../column/column-layout.component';
import { HeadingLayoutComponent } from '../heading/heading-layout.component';
import { ImageLayoutComponent } from '../image/image-layout.component';
import { LinkLayoutComponent } from '../link/link-layout.component';
import { TextLayoutComponent } from '../text/text-layout.component';

@Component({
  selector: 'cc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ColumnLayoutComponent,
    HeadingLayoutComponent,
    ImageLayoutComponent,
    LinkLayoutComponent,
    TextLayoutComponent,
  ],
})
export class CardComponent {
  @Input() model!: CardLayout;
}
