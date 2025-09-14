import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { LayoutService } from '../../../../core/services/layout.service';

@Component({
  selector: 'cc-property-panel',
  templateUrl: './property-panel.component.html',
  styleUrls: ['./property-panel.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PropertyPanelComponent implements OnInit, OnDestroy {
  selectedComponent: any | null = null;

  private destroyed$ = new Subject<void>();

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService
      .getSelectedComponent()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((component) => {
        this.selectedComponent = component;
      });
  }

  deleteComponent(): void {
    if (!this.selectedComponent) {
      return;
    }

    this.layoutService.removeComponent(this.selectedComponent.id);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
