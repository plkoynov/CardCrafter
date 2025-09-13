import { Component } from '@angular/core';
import { EditorCanvasComponent } from '../components/editor-canvas/editor-canvas.component';
import { LayoutTreeComponent } from '../components/layout-tree/layout-tree.component';
import { PropertyPanelComponent } from '../components/property-panel/property-panel.component';

@Component({
  selector: 'cc-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.scss'],
  standalone: true,
  imports: [LayoutTreeComponent, PropertyPanelComponent, EditorCanvasComponent],
})
export class EditorPageComponent {}
