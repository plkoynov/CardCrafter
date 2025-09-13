import { Component } from '@angular/core';
import { EditorCanvasComponent } from '../editor-canvas/editor-canvas.component';
import { LayoutTreeComponent } from '../layout-tree/layout-tree.component';
import { PropertyPanelComponent } from '../property-panel/property-panel.component';

@Component({
  selector: 'cc-editor-workspace',
  templateUrl: './editor-workspace.component.html',
  styleUrls: ['./editor-workspace.component.scss'],
  standalone: true,
  imports: [LayoutTreeComponent, PropertyPanelComponent, EditorCanvasComponent],
})
export class EditorWorkspaceComponent {}
