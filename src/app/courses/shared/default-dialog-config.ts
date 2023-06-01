<<<<<<< HEAD
import { MatDialogConfig } from '@angular/material/dialog';
=======
import {  MatDialogConfig } from '@angular/material/dialog';
>>>>>>> b1078a1f5296fe020164725c3a7d57745dda413b


export function defaultDialogConfig() {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '400px';

  return dialogConfig;
}
