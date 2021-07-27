export default {
  dashboard: {
    welcome: 'Willkommen in MHIRA',
  },
  menu: {
    dashboard: 'Dashboard',
    caseManagement: 'Patienten',
    patientList: 'Patientenliste',
    createPatient: 'Patient erstellen',
    questionnaires: 'Fragebögen',
    questionnairesList: 'Fragebogenliste',
    uploadQuestionnaire: 'Fragebogen hochladen',
    assessments: 'Einschätzungen',
    planAssessment: 'Einschätzung planen',
    plannedAssessments: 'Geplante Einschätzungen',
    userManagement: 'Benutzer',
    listUsers: 'Benutzerliste',
    newUser: 'Benutzer erstellen',
    administration: 'Administration',
    permissionMatrix: 'Berechtigungs-Matrix',
    permissions: 'Berechtigungen',
    roles: 'Rollen',
    departments: 'Abteilungen',
    settings: 'Einstellungen',
    systemConfiguration: 'System-Einstellungen',
    patientStatuses: 'Patient-Status',
  },
  tables: {
    patients: {
      firstName: 'Vorname',
      middleName: 'Zweitname',
      lastName: 'Nachname',
      medicalRecordNo: 'Spital ID',
      gender: 'Geschlecht',
      birthDate: 'Geburtsdatum',
      status: 'Status',
      informants: 'Informanten',
      caseManager: 'Case Manager',
      createdAt: 'Erstellt am',
    },
    users: {
      firstName: 'Vorname',
      middleName: 'Zweitname',
      lastName: 'Nachname',
      workID: 'Mitarbeiter ID',
      phone: 'Telefon',
      username: 'Benutzername',
      formattedStatus: 'Status',
      formattedRoles: 'Rollen',
      formattedDepartments: 'Abteilungen',
    },
  },
  forms: {
    changePassword: {
      newPassword: 'Neues Passwort eingeben',
      newPasswordConfirmation: 'Passwort wiederholen',
    },
    changeUserPassword: {
      currentPassword: 'Aktuelles Passwort eingeben',
      newPassword: 'Neues Passwort eingeben',
      newPasswordConfirmation: 'Passwort wiederholen',
    },
    userProfile: {
      username: 'Benutzername',
      workID: 'Mitarbeiter ID',
      email: 'E-Mail',
      firstName: 'Vorname',
      middleName: 'Zweitname',
      lastName: 'Nachname',
      phone: 'Telefon',
      password: 'Passwort',
      passwordConfirmation: 'Passwort wiederholen',
    },
    userProfileEdit: {
      username: 'Benutzername',
      workID: 'Mitarbeiter ID',
      email: 'E-Mail',
      firstName: 'Vorname',
      middleName: 'Zweitname',
      lastName: 'Nachname',
      phone: 'Telefon',
    },
    userRolesPermissions: {
      roleId: 'Rolle',
    },
    patients: {
      patientInformation: 'Patienten Informationen',
      firstName: 'Vorname',
      middleName: 'Zweitname',
      lastName: 'Nachname',
      id: 'Spital ID',
      birthDate: 'Geburtsdatum',
      gender: 'Geschlecht',
      department: 'Abteilung',
      patientAddress: 'Adresse',
      street: 'Strasse',
      addressNumber: 'Hausnummer',
      addressApartment: 'Apartment',
      addressPlace: 'Ort',
      addressPostalCode: 'Postleitzahl',
      addressCountryCode: 'Land',
      patientContact: 'Kontaktdaten',
      email: 'E-Mail Adresse',
      phone: 'Telefon',
      phone2: 'Alternatives Telefon',
      emergencyContacts: 'Notfallkontakt',
    },
  },
  assessmentForm: {
    license: 'Lizenz: {{license}}',
    questionsAnswered: '{{actual}}/{{total}} beantwortet',
    optionalAnswered: '+{{actual}} optional',
    fillingTime: 'Dauer: {{time}}min',
    completeAssessment: 'Einschätzung abschliessen',
    alreadyCompleted: 'Einschätzung ist abgeschlossen',
    overview: 'Übersicht',
    next: 'Weiter',
    prev: 'Zurück',
    complete: 'Danke für das Ausfüllen der Einschätzung. Die Seite kann jetzt geschlossen werden.',
  },
};
