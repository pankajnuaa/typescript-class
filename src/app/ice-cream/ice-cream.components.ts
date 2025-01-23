import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-ice-cream',

  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [],

  template: `
    <div>
      <button
        [disabled]="selectedFlavor() === 'chocolate'"
        (click)="selectedFlavor.set('chocolate')"
        class="btn btn-primary"
      >
        Chocolate
      </button>
      <button
        [disabled]="selectedFlavor() === 'vanilla'"
        (click)="selectedFlavor.set('vanilla')"
        class="btn btn-primary"
      >
        Vanilla
      </button>
      <button
        [disabled]="selectedFlavor() === 'strawberry'"
        (click)="selectedFlavor.set('strawberry')"
        class="btn btn-primary"
      >
        Strawberry
      </button>
    </div>
    <div>
      <button class="btn btn-primary">Small</button>
      <button class="btn btn-primary">Medium</button>
      <button class="btn btn-primary">Large</button>
    </div>
  `,

  styles: ``,
})
export class IceCreamComponent {
  selectedFlavor = signal('');
}

export const ICE_CREAM_FLAVORS = ['chocolate', 'vanilla', 'strawberry'];
