import { Injectable } from '@angular/core'

import { LoggingService } from './logging.service'

@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    
      onAccountAdded(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        console.log('A server status changed, new status: ' + status);
      }
    
      onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        console.log('A server status changed, new status: ' + newStatus);
      }
}