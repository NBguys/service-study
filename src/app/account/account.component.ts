import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LoggingService } from '../logging.service'
import { AccountsService } from '../accounts.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {}

  onSetTo(status: string) {

    // console.log('A server status changed, new status: ' + status);
    this.accountsService.onStatusChanged(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdate.emit(status);
  }
}
