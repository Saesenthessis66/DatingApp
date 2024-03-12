import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy()
  {
    this.busyRequestCount++;
    this.spinnerService.show(undefined,{
      type:'ball-climbing-dot',
      bdColor: 'rgba(255, 255, 255,0)',
      color: '#b2d9eb'
    })
  }

  idle()
  {
    this.busyRequestCount--;
    if(this.busyRequestCount<=0)
    {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
