import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CanExit } from './canExit';

// export interface CanExit {
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }

@Injectable()
export class CanExitGuard implements CanDeactivate<CanExit> {
  canDeactivate(component: CanExit) {
    if (component.canDeactivate) {
      return component.canDeactivate();
    }
    return true;
  }
}