import { Injectable } from '@angular/core';
import { BaseComponent, CardLayout } from '../../models/layout.model';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private layout: CardLayout = {
    type: 'card',
    id: 'root',
    styles: {},
    children: [],
  };

  private selectedParentId: string | null = this.layout.id;

  getLayout(): CardLayout {
    return this.layout;
  }

  setLayout(layout: CardLayout): void {
    this.layout = layout;
  }

  setSelectedParentId(id: string | null): void {
    this.selectedParentId = id;
  }

  getSelectedParentId(): string | null {
    return this.selectedParentId;
  }

  addComponent(component: BaseComponent): boolean {
    if (!this.selectedParentId) {
      return false;
    }

    const parent = this.findComponentById(this.layout, this.selectedParentId);
    if (parent) {
      if (!('children' in parent) || !(parent as any).children) {
        return false;
      }

      (parent as any).children.push(component);
      return true;
    }

    return false;
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

    const children = (parent as any).children as BaseComponent[];

    const idx = children.findIndex((child) => child.id === id);
    if (idx >= 0) {
      children.splice(idx, 1);
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
