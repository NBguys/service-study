import { Component, EventEmitter, Output } from '@angular/core';

import { LoggingService } from '../logging.service'
import { AccountsService } from '../accounts.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {

    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountsService.onAccountAdded(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
    this.accountsService.statusUpdate.subscribe(
      (status: string) => alert("new status :" + status)
    );
  }
}
