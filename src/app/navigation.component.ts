import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  template: `
    <mat-toolbar color="primary" class="bg-inherit sticky top-0 z-[2]">
      <button
        type="button"
        aria-label="Toggle sidenav"
        mat-icon-button
        (click)="drawer.toggle()"
        *ngIf="isHandset$ | async"
      >
        <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
      </button>
      <span>angular-with-material</span>
    </mat-toolbar>
    <mat-sidenav-container class="h-[calc(100%-64px)]">
      <mat-sidenav
        #drawer
        class="w-[200px] pt-16"
        fixedInViewport
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="(isHandset$ | async) === false"
      >
        <mat-nav-list>
          <a mat-list-item routerLink="dashboard">Home</a>
          <a mat-list-item routerLink="table">Table</a>
          <a mat-list-item href="#">Form</a>
          <a mat-list-item routerLink="custom-page-one">Custom Page One</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content class="p-2">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
