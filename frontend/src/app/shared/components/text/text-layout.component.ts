import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextComponent } from '../../../models/layout.model';

@Component({
  selector: 'cc-text',
  templateUrl: './text-layout.component.html',
  styleUrls: ['./text-layout.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TextLayoutComponent {
  @Input() model!: TextComponent;
}
