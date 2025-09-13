import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextComponent } from '../../../models/layout.model';
import { BaseLayoutComponent } from '../base/base-layout.component';

@Component({
  selector: 'cc-text',
  templateUrl: './text-layout.component.html',
  styleUrls: ['./text-layout.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TextLayoutComponent extends BaseLayoutComponent<TextComponent> {}
