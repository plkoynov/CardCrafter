import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { EMPTY, map, Observable } from 'rxjs';
import { LayoutService } from '../../../core/services/layout.service';
import { BaseComponent } from '../../../models/layout.model';

@Directive({})
export abstract class BaseLayoutComponent<TLayoutModel extends BaseComponent> implements OnInit {
  @Input() model!: TLayoutModel;

  isSelectedAsParentContainer$: Observable<boolean> = EMPTY;

  constructor(private layoutService: LayoutService) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.stopPropagation();
    this.layoutService.setSelectedComponent(this.model);
  }

  ngOnInit(): void {
    this.isSelectedAsParentContainer$ = this.layoutService
      .getSelectedComponent()
      .pipe(map((selected) => selected?.id === this.model.id));
  }
}
