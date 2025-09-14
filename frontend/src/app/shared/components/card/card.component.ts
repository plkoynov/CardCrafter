import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardLayout } from '../../../models/layout.model';
import { BaseLayoutComponent } from '../base/base-layout.component';
import { ColumnLayoutComponent } from '../column/column-layout.component';
import { RowLayoutComponent } from '../row/row-layout.component';

@Component({
  selector: 'cc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, ColumnLayoutComponent, RowLayoutComponent],
})
export class CardComponent extends BaseLayoutComponent<CardLayout> {}
