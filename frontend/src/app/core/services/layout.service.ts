import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseComponent, BaseContainerComponent, CardLayout } from '../../models/layout.model';
import { LayoutComponentBuilderService } from './layout-component-builder.service';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private layout: CardLayout = {
    type: 'card',
    id: 'root',
    styles: {},
    children: [],
  };

  private selectedParentId: string | null = this.layout.id;
  private selectedComponent$ = new BehaviorSubject<BaseComponent | null>(null);

  constructor(private builder: LayoutComponentBuilderService) {
    this.setSelectedComponent(this.layout);
  }

  getLayout(): CardLayout {
    return this.layout;
  }

  setSelectedComponent(component: BaseComponent): void {
    this.selectedParentId = component.id;
    this.selectedComponent$.next(component);
  }

  getSelectedComponent(): Observable<BaseComponent | null> {
    return this.selectedComponent$.asObservable();
  }

  /**
   * Adds a new component to the currently selected parent in the layout tree.
   * Handles special logic for rows and columns to ensure correct nesting.
   * Returns true if the component was added successfully, false otherwise.
   */
  addComponent(component: BaseComponent): boolean {
    // If no parent is selected, cannot add component
    if (!this.selectedParentId) {
      return false;
    }

    // Find the selected parent component in the layout tree
    const parent = this.findComponentById(this.layout, this.selectedParentId);

    // Ensure the parent is a container that can have children
    if (!parent || !('children' in parent) || !(parent as BaseContainerComponent).children) {
      return false;
    }

    const parentContainer = parent as BaseContainerComponent;
    let parentChildren = parentContainer.children as BaseComponent[];

    switch (component.type) {
      case 'row': {
        // If parent is a row or card, ensure it has a column child to hold rows
        if (parentContainer.type === 'row' || parentContainer.type === 'card') {
          const hasColumnChild = parentChildren[0]?.type === 'column';

          // If no column child exists, create one and move existing children into it
          if (!hasColumnChild) {
            const column = this.builder.buildColumn([...parentChildren]);
            parentContainer.children = [column];
          }

          // Set parentChildren to the column's children
          parentChildren = parentContainer.children[0].children as BaseComponent[];
        }

        // Add the new row component
        parentChildren.push(component);

        return true;
      }
      case 'column': {
        // If parent is a column or card, ensure it has a row child to hold columns
        if (parentContainer.type === 'column' || parentContainer.type === 'card') {
          const hasRowChild = parentChildren[0]?.type === 'row';

          // If no row child exists, create one and move existing children into it
          if (!hasRowChild) {
            const row = this.builder.buildRow([...parentChildren]);
            parentContainer.children = [row];
          }

          // Set parentChildren to the row's children and add the new column component
          parentChildren = parentContainer.children[0].children as BaseComponent[];

          // Wrap existing non-column components in new columns
          const componentsWithoutColumn = parentChildren.filter((c) => c.type !== 'column');
          componentsWithoutColumn.forEach((cwc) => {
            const newColumn =
              cwc.type !== 'row'
                ? this.builder.buildColumn([this.builder.buildRow([cwc])])
                : this.builder.buildColumn([cwc]);

            const idx = parentChildren.indexOf(cwc);
            if (idx >= 0) {
              parentChildren.splice(idx, 1, newColumn);
            }
          });

          parentChildren.push(component);

          return true;
        } else if (parentContainer.type === 'row') {
          // If parent is a row, wrap the new column in a row and add it
          const row = this.builder.buildRow([component]);
          parentChildren.push(row);

          return true;
        }

        return false;
      }
      default: {
        // For other component types, wrap the component in a row and add it
        const row = this.builder.buildRow([component]);
        parentChildren.push(row);

        return true;
      }
    }
  }

  removeComponent(id: string): boolean {
    if (id === 'root') {
      return false;
    }

    return this.removeComponentRecursive(this.layout, id);
  }

  updateComponent(id: string, changes: Partial<BaseComponent>): boolean {
    const comp = this.findComponentById(this.layout, id);
    if (comp) {
      Object.assign(comp, changes);
      return true;
    }

    return false;
  }

  private findComponentById(component: BaseComponent, id: string): BaseComponent | null {
    if (component.id === id) {
      return component;
    }

    if ('children' in component && Array.isArray((component as any).children)) {
      for (const child of (component as any).children) {
        const found = this.findComponentById(child, id);
        if (found) {
          return found;
        }
      }
    }

    return null;
  }

  private removeComponentRecursive(parent: BaseComponent, id: string): boolean {
    if (!('children' in parent) || !(parent as any).children) {
      return false;
    }

    const parentContainer = parent as BaseContainerComponent;
    const children = parentContainer.children as BaseComponent[];

    const idx = children.findIndex((child) => child.id === id);
    if (idx >= 0) {
      children.splice(idx, 1);
      this.setSelectedComponent(parent);
      return true;
    }

    for (const child of children) {
      if (this.removeComponentRecursive(child, id)) {
        return true;
      }
    }

    return false;
  }
}
