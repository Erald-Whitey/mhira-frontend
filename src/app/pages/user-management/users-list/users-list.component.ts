import { finalize } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormattedUser } from '../@types/formatted-user';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { UsersService } from '@app/pages/user-management/@services/users.service';
import { environment } from '@env/environment';
import { PageInfo, Paging } from '@shared/@types/paging';
import { UserModel } from '@app/pages/user-management/@models/user.model';
import { Sorting } from '../../../@shared/@types/sorting';
import {
  DEFAULT_PAGE_SIZE,
  TableColumn,
  SortField,
  Action,
  ActionArgs,
} from '../../../@shared/@modules/master-data/@types/list';
import { Filter } from '../../../@shared/@types/filter';
import { UserColumns } from '../@tables/users.table';
import { AppPermissionsService } from '@app/@shared/services/app-permissions.service';
import { PermissionKey } from '@app/@shared/@types/permission';

const CryptoJS = require('crypto-js');

enum ActionKey {
  DELETE_USER,
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  public data: Partial<FormattedUser>[];

  public columns: TableColumn<FormattedUser>[] = UserColumns;

  public userRequestOptions: { paging: Paging; filter: Filter; sorting: Sorting[] } = {
    paging: { first: DEFAULT_PAGE_SIZE },
    filter: {},
    sorting: [],
  };

  public loading = false;

  public pageInfo: PageInfo;

  public actions: Action<ActionKey>[] = [];

  constructor(
    private usersService: UsersService,
    private router: Router,
    private perms: AppPermissionsService,
    private modalService: NzModalService,
    private messageService: NzMessageService
  ) {
    this.getUsers();

    if (this.perms.permissionsOnly(PermissionKey.MANAGE_USERS)) {
      this.actions = [{ key: ActionKey.DELETE_USER, title: 'Delete User' }];
    }
  }

  public onPageChange(paging: Paging): void {
    this.userRequestOptions.paging = paging;
    this.getUsers();
  }

  public onSort(sorting: SortField<FormattedUser>[]): void {
    this.userRequestOptions.sorting = sorting;
    this.getUsers();
  }

  public onFilter(filter: Filter): void {
    this.userRequestOptions.filter = filter;
    this.getUsers();
  }

  public onSearch(searchString: string): void {
    this.userRequestOptions.filter = { or: this.createSearchFilter(searchString) };
    this.getUsers();
  }

  public onUserSelect(user: FormattedUser): void {
    const dataString = CryptoJS.AES.encrypt(JSON.stringify(user), environment.secretKey).toString();
    this.router.navigate(['/mhira/user-management/user-form'], {
      queryParams: {
        user: dataString,
      },
    });
  }

  public onAction({ action, context: user }: ActionArgs<FormattedUser, ActionKey>): void {
    switch (action.key) {
      case ActionKey.DELETE_USER:
        this.deleteUser(user);
        return;
    }
  }

  private getUsers(): void {
    this.loading = true;
    this.usersService
      .getUsers(this.userRequestOptions)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(({ data }) => {
        this.data = data.users.edges.map((user: any) => UserModel.fromJson(user.node));
        this.pageInfo = data.users.pageInfo;
      });
  }

  private async deleteUser(user: FormattedUser): Promise<void> {
    const modal = this.modalService.confirm({
      nzOnOk: () => true,
      nzTitle: 'Delete User',
      nzContent: `
        Are you sure you want to delete ${user.firstName} ${user.lastName}? This action is irreversible
      `,
    });

    const confirmation = await modal.afterClose.toPromise();
    if (!confirmation) return;

    this.loading = true;
    this.usersService
      .deleteOneUser({ id: user.id })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => this.data.splice(this.data.indexOf(user), 1),
        () => this.messageService.error('An error occurred could not delete patient', { nzDuration: 3000 })
      );
  }

  private createSearchFilter(searchString: string): Array<{ [K in keyof FormattedUser]: {} }> {
    if (!searchString) return [];
    return [
      { firstName: { iLike: `%${searchString}%` } },
      { middleName: { iLike: `%${searchString}%` } },
      { lastName: { iLike: `%${searchString}%` } },
      { workID: { iLike: `%${searchString}%` } },
      { phone: { iLike: `%${searchString}%` } },
      { username: { iLike: `%${searchString}%` } },
      {
        roles: {
          or: [{ name: { iLike: `%${searchString}%` } }],
        },
      },
      {
        departments: {
          or: [{ name: { iLike: `%${searchString}%` } }],
        },
      },
    ];
  }
}
