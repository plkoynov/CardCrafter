export type ComponentType =
  | 'card'
  | 'heading'
  | 'text'
  | 'image'
  | 'row'
  | 'column'
  | 'link'
  | 'divider'
  | 'background-shape';

export interface BaseComponent {
  id: string;
  type: ComponentType;
  styles?: Record<string, any>;
}

export interface BaseContainerComponent extends BaseComponent {
  children: any[];
}

export interface CardLayout extends BaseComponent {
  type: 'card';
  width?: string;
  height?: string;
  children?: (RowComponent | ColumnComponent)[];
}

export interface RowComponent extends BaseContainerComponent {
  type: 'row';
}

export interface ColumnComponent extends BaseContainerComponent {
  type: 'column';
}

export interface HeadingComponent extends BaseComponent {
  type: 'heading';
  text: string;
  level: number; // 1 to 6
}

export interface TextComponent extends BaseComponent {
  type: 'text';
  text: string;
}

export interface ImageComponent extends BaseComponent {
  type: 'image';
  src: string;
  alt?: string;
}

export interface LinkComponent extends BaseComponent {
  type: 'link';
  href: string;
  text: string;
}

export interface DividerComponent extends BaseComponent {
  type: 'divider';
  thickness?: string;
  color?: string;
}

export interface ShapeComponent extends BaseComponent {
  type: 'background-shape';
  shapeType: 'circle' | 'rectangle' | 'triangle';
  color: string;
  size: string;
}
