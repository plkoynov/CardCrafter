import { Injectable } from '@angular/core';
import {
  BaseComponent,
  ColumnComponent,
  ComponentType,
  DividerComponent,
  HeadingComponent,
  ImageComponent,
  LinkComponent,
  ShapeComponent,
  TextComponent,
} from '../../models/layout.model';

@Injectable({ providedIn: 'root' })
export class LayoutComponentBuilderService {
  private generateId(type: ComponentType): string {
    const randomStr = Math.random().toString(36).substring(2, 10);
    return `${type}-${randomStr}`;
  }

  buildHeading(text = 'Heading', styles: Record<string, any> = {}): HeadingComponent {
    return {
      id: this.generateId('heading'),
      type: 'heading',
      level: 1,
      text,
      styles,
    };
  }

  buildText(text = 'Text', styles: Record<string, any> = {}): TextComponent {
    return {
      id: this.generateId('text'),
      type: 'text',
      text,
      styles,
    };
  }

  buildLink(text = 'Link', url = '', styles: Record<string, any> = {}): LinkComponent {
    return {
      id: this.generateId('link'),
      type: 'link',
      text,
      url,
      styles,
    } as any;
  }

  buildImage(src = '', alt = '', styles: Record<string, any> = {}): ImageComponent {
    return {
      id: this.generateId('image'),
      type: 'image',
      src,
      alt,
      styles,
    };
  }

  buildColumn(children: BaseComponent[] = [], styles: Record<string, any> = {}): ColumnComponent {
    return {
      id: this.generateId('column'),
      type: 'column',
      children,
      styles,
    };
  }

  buildDivider(styles: Record<string, any> = {}): DividerComponent {
    return {
      id: this.generateId('divider'),
      type: 'divider',
      styles,
    };
  }

  buildShape(styles: Record<string, any> = {}): ShapeComponent {
    return {
      id: this.generateId('background-shape'),
      type: 'background-shape',
      shapeType: 'rectangle',
      color: '',
      size: '1em',
      styles,
    };
  }
}
