import { Form } from '@shared/components/form/@types/form';
import { Field } from '@shared/components/form/@types/field';
import { getNames } from 'i18n-iso-countries';

const informationFields: Field[] = [
  {
    value: '',
    name: 'firstName',
    title: 'First Name',
    label: 'First Name',
    translationPath: 'forms.patients.firstName',
    description: 'Enter first name',
    type: 'text',
    validationMessage: 'please enter first name',
    isRequired: true,
    span: 8,
  },
  {
    value: '',
    name: 'middleName',
    title: 'Middle Name',
    label: 'Middle Name',
    translationPath: 'forms.patients.middleName',
    description: 'Enter middle name',
    type: 'text',
    validationMessage: 'please enter middle name',
    isRequired: false,
    span: 8,
  },
  {
    value: '',
    name: 'lastName',
    title: 'Last Name',
    label: 'Last Name',
    translationPath: 'forms.patients.lastName',
    description: 'Enter last name',
    type: 'text',
    validationMessage: 'please enter last name',
    isRequired: true,
    span: 8,
  },
  {
    value: '',
    name: 'medicalRecordNo',
    title: 'ID',
    label: 'Medical record number',
    translationPath: 'forms.patients.id',
    description: 'Enter medical record number',
    type: 'text',
    validationMessage: 'please enter medical record number',
    isRequired: true,
    span: 8,
  },
  {
    value: '',
    title: 'Date of Birth',
    name: 'birthDate',
    label: 'Birth Date',
    translationPath: 'forms.patients.birthDate',
    description: 'Enter date of birth',
    type: 'date',
    validationMessage: 'please enter date of birth',
    isRequired: false,
    span: 8,
  },
  {
    value: '',
    name: 'gender',
    title: 'Gender',
    label: 'Gender',
    translationPath: 'forms.patients.gender',
    description: 'Select Gender',
    type: 'select',
    validationMessage: 'please select gender',
    isRequired: false,
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ],
    span: 8,
  },
];

const departmentsField: Field = {
  value: '',
  name: 'departmentIds',
  title: 'Department',
  label: 'Department',
  translationPath: 'forms.patients.department',
  description: 'Select Department',
  type: 'checkBox',
  validationMessage: 'please select Department',
  isRequired: false,
  options: [],
  span: 8,
};

const addressFields: Field[] = [
  {
    value: '',
    name: 'addressStreet',
    title: 'Street',
    label: 'Street',
    translationPath: 'forms.patients.street',
    description: 'enter street name',
    type: 'text',
    validationMessage: 'please enter street name',
    isRequired: false,
    options: [],
    span: 8,
  },
  {
    value: '',
    name: 'addressNumber',
    title: 'Number',
    label: 'Number',
    translationPath: 'forms.patients.addressNumber',
    description: 'enter number',
    type: 'text',
    validationMessage: 'please enter number',
    isRequired: false,
    options: [],
    span: 8,
  },
  {
    value: '',
    name: 'addressApartment',
    title: 'Apartment',
    label: 'Apartment',
    translationPath: 'forms.patients.addressApartment',
    description: 'enter apartment number',
    type: 'text',
    validationMessage: 'please enter apartment number',
    isRequired: false,
    options: [],
    span: 8,
  },
  {
    value: '',
    name: 'addressPlace',
    title: 'Place',
    label: 'Place',
    translationPath: 'forms.patients.addressPlace',
    description: 'enter place',
    type: 'text',
    validationMessage: 'please enter place',
    isRequired: false,
    options: [],
    span: 8,
  },
  {
    value: '',
    name: 'addressPostalCode',
    title: 'Postal Code',
    label: 'Postal Code',
    translationPath: 'forms.patients.addressPostalCode',
    description: 'enter postal code',
    type: 'text',
    validationMessage: 'please enter postal code',
    isRequired: false,
    options: [],
    span: 8,
  },
  {
    value: '',
    name: 'addressCountryCode',
    title: 'Country',
    label: 'Country',
    translationPath: 'forms.patients.addressCountryCode',
    description: 'Select Country',
    type: 'select',
    validationMessage: 'please select country',
    isRequired: false,
    span: 8,
    options: Object.entries(getNames('en', { select: 'official' })).map(([value, label]) => ({ label, value })),
  },
];

const contactFields: Field[] = [
  {
    value: '',
    name: 'email',
    title: 'Email Address',
    label: 'Email Address',
    translationPath: 'forms.patients.email',
    description: 'Enter email address',
    type: 'text',
    validationMessage: 'please enter email address',
    isRequired: false,
    span: 8,
  },
  {
    value: '',
    name: 'phone',
    title: 'Phone',
    label: 'Phone',
    translationPath: 'forms.patients.phone',
    description: 'Enter phone number',
    type: 'text',
    validationMessage: 'please enter phone number',
    isRequired: false,
    span: 8,
  },
  {
    value: '',
    name: 'phone2',
    title: 'Phone (alternative)',
    label: 'Phone (alternative)',
    translationPath: 'forms.patients.phone2',
    description: 'Enter alternative phone number',
    type: 'text',
    validationMessage: 'please alternative enter phone number',
    isRequired: false,
    span: 8,
  },
];

// const emergencyContactFields: Field[] = [
//   {
//     value: '',
//     name: 'emergencyContacts',
//     title: 'Emergency Contact',
//     label: 'Emergency Contact',
//     translationPath: 'forms.patients.emergencyContacts',
//     description: 'Enter emergency contact',
//     type: 'array',
//     validationMessage: 'please alternative enter phone number',
//     isRequired: false,
//     span: 24,
//     rows: [],
//     children: [
//       {
//         value: '',
//         name: 'firstName',
//         title: 'First Name',
//         label: 'First Name',
//         translationPath: 'forms.patients.firstName',
//         description: 'Enter contact first name',
//         type: 'text',
//         validationMessage: 'please enter contact first name',
//         isRequired: false,
//         span: 8,
//       },
//       {
//         value: '',
//         name: 'middleName',
//         title: 'Middle Name',
//         label: 'Middle Name',
//         translationPath: 'forms.patients.middleName',
//         description: 'Enter contact middle name',
//         type: 'text',
//         validationMessage: 'please enter contact middle name',
//         isRequired: false,
//         span: 8,
//       },
//       {
//         value: '',
//         name: 'lastName',
//         title: 'Last Name',
//         label: 'Last Name',
//         translationPath: 'forms.patients.lastName',
//         description: 'Enter contact last name',
//         type: 'text',
//         validationMessage: 'please enter contact last name',
//         isRequired: false,
//         span: 8,
//       },
//       {
//         value: '',
//         name: 'email',
//         title: 'Email',
//         label: 'Email',
//         translationPath: 'forms.patients.email',
//         description: 'Enter contact email',
//         type: 'text',
//         validationMessage: 'please enter contact email',
//         isRequired: false,
//         span: 12,
//       },
//       {
//         value: '',
//         name: 'phone',
//         title: 'Phone',
//         label: 'Phone',
//         translationPath: 'forms.patients.phone',
//         description: 'Enter contact phone',
//         type: 'text',
//         validationMessage: 'please enter contact phone',
//         isRequired: false,
//         span: 12,
//       },
//     ],
//   },
// ];

const getForm = (createMode: boolean): Form => {
  return {
    submitButtonText: 'Save Patient',
    editButtonText: 'Edit Patient',
    submitButtonClass: 'right-align-submit',
    groups: [
      {
        title: 'Patient Information',
        translationPath: 'forms.patients.patientInformation',
        fields: createMode ? [...informationFields, departmentsField] : informationFields,
      },
      {
        title: 'Patient Address',
        translationPath: 'forms.patients.patientAddress',
        fields: addressFields,
      },
      {
        title: 'Patient Contact',
        translationPath: 'forms.patients.patientContact',
        fields: contactFields,
      },
      // {
      //   title: 'Emergency Contacts',
      //   translationPath: 'forms.patients.emergencyContacts',
      //   fields: emergencyContactFields,
      // },
    ],
  };
};

export const PatientCreateForm = getForm(true);
export const PatientUpdateForm = getForm(false);
