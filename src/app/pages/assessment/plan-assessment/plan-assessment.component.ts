import { Component, OnInit, OnDestroy } from '@angular/core';
import { planAssessmentForm } from '@app/pages/assessment/@forms/plan-assessment.form';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AssessmentService } from '@app/pages/assessment/@services/assessment.service';
import { Questionnaire } from '@app/pages/assessment/@types/questionnaire';
import { PatientsService } from '@app/pages/home/@services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-assessment',
  templateUrl: './plan-assessment.component.html',
  styleUrls: ['./plan-assessment.component.scss'],
})
export class PlanAssessmentComponent implements OnInit, OnDestroy {
  modalIsVisible = false;
  modalIsLoading = false;
  isLoading = false;
  loadingMessage = '';
  questionnaires: Questionnaire[];
  addedQuestionnaires: Questionnaire[] = [];
  planAssessmentForm = planAssessmentForm;
  selectedPatientId: number;

  public questionnaireSearch = new Subject<string>();
  private questionnaireSearchSubscription: Subscription;

  constructor(
    private assessmentService: AssessmentService,
    private patientService: PatientsService,
    private message: NzMessageService,
    private modal: NzModalService,
    private router: Router
  ) {
    this.questionnaireSearchSubscription = this.questionnaireSearch
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value) => {
        this.searchQuestionnaires(value);
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.questionnaireSearch.unsubscribe();
  }

  searchQuestionnaires(keyword: string) {
    this.isLoading = true;
    this.questionnaires = [];
    this.assessmentService.getQuestionnaires(keyword).subscribe(
      async ({ data }) => {
        data['getQuestionnaires'].edges.map((questionnaire: any) => {
          this.questionnaires.push(questionnaire.node);
        });
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  handleSearchOptions(search: any) {
    switch (search.field.name) {
      case 'patientId':
        this.searchPatient(search.keyword);
        break;
      case 'clinicianId':
        this.searchManager('clinician', search.keyword);
        break;
      case 'informantId':
        this.searchManager('informant', search.keyword);
        break;
    }
  }

  handleInputChange(input: any) {
    switch (input.name) {
      case 'patientId':
        this.selectedPatientId = input.value;
        break;
    }
  }

  searchPatient(keyword: string) {
    const options: { label: string; value: number }[] = [];
    this.patientService.getPatients({ searchKeyword: keyword }).subscribe(
      async ({ data }) => {
        data['getPatients'].edges.map((patient: any) => {
          const option = { value: patient.node.id, label: `${patient.node.firstName} ${patient.node.lastName}` };
          if (options.indexOf(option) === -1) {
            options.push(option);
          }
        });
        this.planAssessmentForm.groups[0].fields[0].options = options;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  searchManager(managerType: string, keyword: string) {
    const options: { label: string; value: number }[] = [];
    const query = managerType === 'clinician' ? 'getPatientCaseManagers' : 'getPatientInformants';
    if (!this.selectedPatientId) {
      this.modal.error({
        nzTitle: 'Operation Failed!!',
        nzContent: 'please select patient first',
      });
      return;
    }
    this.patientService
      .getPatientManagers(query, {
        patientId: this.selectedPatientId,
        searchKeyword: keyword,
      })
      .subscribe(
        async ({ data }) => {
          data[query].edges.map((manager: any) => {
            const option = { value: manager.node.id, label: `${manager.node.firstName} ${manager.node.lastName}` };
            if (options.indexOf(option) === -1) {
              options.push(option);
            }
          });
          switch (managerType) {
            case 'clinician':
              this.planAssessmentForm.groups[0].fields[1].options = options;
              break;
            case 'informant':
              this.planAssessmentForm.groups[0].fields[2].options = options;
              break;
          }
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }

  selectQuestionnaire(questionnaire: Questionnaire) {
    if (this.addedQuestionnaires.indexOf(questionnaire) === -1) {
      this.addedQuestionnaires.push(questionnaire);
    }
  }

  removeAddedQuestionnaires(index: number) {
    this.addedQuestionnaires.splice(index, 1);
  }

  handleCancel() {
    this.questionnaires = [];
    this.modalIsVisible = false;
  }

  handleAddQuestionaire(): void {
    this.modalIsVisible = true;
  }

  submitForm(form: any) {
    if (this.addedQuestionnaires.length === 0) {
      this.modal.error({
        nzTitle: 'Cannot create a plan',
        nzContent: 'please add at least one questionnaire',
      });
      return;
    }
    this.isLoading = true;
    this.loadingMessage = 'creating an assessment';
    form.questionnaires = this.addedQuestionnaires;
    this.assessmentService.planAssessment(form).subscribe(
      async ({ data }) => {
        this.isLoading = false;
        this.loadingMessage = '';
        this.router.navigate(['/mhira/assessments']);
      },
      (error) => {
        this.isLoading = false;
        this.loadingMessage = '';
        this.router.navigate(['/mhira/assessments']);
      }
    );
  }
}
