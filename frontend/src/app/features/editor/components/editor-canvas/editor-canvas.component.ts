import { Component } from '@angular/core';
import { LayoutService } from '../../../../core/services/layout.service';
import { CardLayout } from '../../../../models/layout.model';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'cc-editor-canvas',
  templateUrl: './editor-canvas.component.html',
  styleUrls: ['./editor-canvas.component.scss'],
  standalone: true,
  imports: [CardComponent],
})
export class EditorCanvasComponent {
  cardLayout: CardLayout = {} as CardLayout;

  constructor(private layoutService: LayoutService) {
    this.cardLayout = this.layoutService.getLayout();
  }
}
