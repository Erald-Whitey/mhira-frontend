import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { PlanAssessmentComponent } from './plan-assessment/plan-assessment.component';
import { AssessmentsListComponent } from './assessments-list/assessments-list.component';
import { AssessmentService } from './@services/assessment.service';
import { PatientsService } from '../patients-management/@services/patients.service';
import { AppFormModule } from '../../@shared/components/form/app-form.module';
import { MasterDataModule } from '../../@shared/@modules/master-data/master-data.module';
import { QuestionnaireSelectionComponent } from './questionnaire-selection/questionnaire-selection.component';
import { ComponentsModule } from '../../@shared/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ClipboardModule } from 'ngx-clipboard';

const antModules = [
  NzGridModule,
  NzCardModule,
  NzModalModule,
  NzButtonModule,
  NzTabsModule,
  NzMessageModule,
  NzAlertModule,
  NzListModule,
  NzInputModule,
  NzIconModule,
  NzToolTipModule,
  NzTagModule,
];

@NgModule({
  imports: [
    ...antModules,
    CommonModule,
    AppFormModule,
    TranslateModule,
    SharedModule,
    AssessmentRoutingModule,
    MasterDataModule,
    ComponentsModule,
    ReactiveFormsModule,
    MasterDataModule,
    ClipboardModule,
  ],
  declarations: [PlanAssessmentComponent, AssessmentsListComponent, QuestionnaireSelectionComponent],
  providers: [PatientsService, AssessmentService],
})
export class AssessmentModule {}
