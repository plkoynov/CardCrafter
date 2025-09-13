export type ComponentType = 'card' | 'heading' | 'text' | 'image' | 'column';

export interface BaseComponent {
  id: string;
  type: ComponentType;
  styles?: Record<string, any>;
}

export interface HeadingComponent extends BaseComponent {
  type: 'heading';
  text: string;
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

export interface ColumnComponent extends BaseComponent {
  type: 'column';
  children: BaseComponent[];
}

export interface CardLayout extends BaseComponent {
  type: 'card';
  width?: string;
  height?: string;
  children?: BaseComponent[];
}
