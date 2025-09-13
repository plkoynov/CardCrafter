import { Directive, HostListener, Input } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';
import { BaseComponent } from '../../../models/layout.model';

@Directive({})
export abstract class BaseLayoutComponent<TLayoutModel extends BaseComponent> {
  @Input() model!: TLayoutModel;

  constructor(private layoutService: LayoutService) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.stopPropagation();
    this.layoutService.setSelectedParentId(this.model.id);
  }

  get isSelectedAsParentContainer(): boolean {
    return this.layoutService.getSelectedParentId() === this.model.id;
  }
}
