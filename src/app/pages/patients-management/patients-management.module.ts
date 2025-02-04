import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { PatientsManagementRoutingModule } from './patients-management-routing.module';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { CaseManagersComponent } from './case-managers/case-managers.component';
import { PatientsService } from './@services/patients.service';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { CreatePatientComponent } from './patient-profile/create-patient/create-patient.component';
import { CaseManagersService } from './@services/case-managers.service';
import { AppFormModule } from '../../@shared/components/form/app-form.module';
import { EmergencyContactsService } from './@services/contacts.service';
import { InformantsListComponent } from './informants-list/informants-list.component';
import { PatientStatusesService } from './@services/patient-statuses.service';
import { FormsModule } from '@angular/forms';
import { MasterDataModule } from '../../@shared/@modules/master-data/master-data.module';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsService } from './@services/departments.service';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';

const antModules = [
  NzGridModule,
  NzCardModule,
  NzTagModule,
  NzModalModule,
  NzButtonModule,
  NzTabsModule,
  NzMessageModule,
  NzAlertModule,
  NzListModule,
  NzInputModule,
  NzIconModule,
  NzDrawerModule,
  NzAvatarModule,
  NzSelectModule,
];

@NgModule({
  imports: [
    ...antModules,
    FormsModule,
    CommonModule,
    AppFormModule,
    TranslateModule,
    SharedModule,
    PatientsManagementRoutingModule,
    MasterDataModule,
  ],
  declarations: [
    PatientsListComponent,
    CaseManagersComponent,
    InformantsListComponent,
    PatientProfileComponent,
    CreatePatientComponent,
    DepartmentsComponent,
  ],
  providers: [
    PatientsService,
    CaseManagersService,
    EmergencyContactsService,
    DepartmentsService,
    PatientStatusesService,
  ],
})
export class PatientsManagementModule {}
