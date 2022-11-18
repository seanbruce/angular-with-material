import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-page-one',
  template: ` <div class="h-[10000px]">custom-page-one works!</div> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPageOneComponent {}
