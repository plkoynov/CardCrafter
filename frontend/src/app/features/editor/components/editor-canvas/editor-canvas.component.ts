import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/ui/card/card.component';

@Component({
  selector: 'cc-editor-canvas',
  templateUrl: './editor-canvas.component.html',
  styleUrls: ['./editor-canvas.component.scss'],
  standalone: true,
  imports: [CardComponent],
})
export class EditorCanvasComponent {}
