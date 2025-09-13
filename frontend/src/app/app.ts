import { Component, signal } from '@angular/core';
import { LayoutComponent } from './shared/ui/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('CardCrafter');
}
