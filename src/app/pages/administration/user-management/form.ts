import { FormItemType } from '../../../@shared/components/form-generator/form-item.type';
import { Form } from '@shared/components/field-generator/formt';

const createUser: FormItemType[] = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    pattern: '',
    isRequired: true,
    description: 'Enter your full name',
    validationMessage: 'Enter your full name',
    fillPercent: 50,
  },
  {
    name: 'email',
    label: 'Your Email',
    type: 'text',
    pattern: '',
    isRequired: true,
    description: 'Enter your Email',
    validationMessage: 'Enter your Email',
    fillPercent: 50,
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    pattern: '',
    isRequired: true,
    description: 'Enter your Address',
    validationMessage: 'Enter your Address',
    fillPercent: 100,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    pattern: '',
    isRequired: true,
    description: 'Enter your Password',
    validationMessage: 'Enter your Password',
    fillPercent: 100,
  },
];

const updateUser: FormItemType[] = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    pattern: '',
    isRequired: true,
    description: 'Enter your full name',
    validationMessage: 'Enter your full name',
    fillPercent: 50,
  },
  {
    name: 'email',
    label: 'Your Email',
    type: 'text',
    pattern: '',
    isRequired: true,
    description: 'Enter your Email',
    validationMessage: 'Enter your Email',
    fillPercent: 50,
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    pattern: '',
    isRequired: true,
    description: 'Enter your Address',
    validationMessage: 'Enter your Address',
    fillPercent: 100,
  },
];

const changeUserPassword: Form = {
  groups: [
    {
      title: 'Change password',
      fields: [
        {
          title: 'Enter New Password',
          name: 'password',
          label: 'New Password',
          type: 'password',
          isRequired: true,
          description: 'Enter new password',
          validationMessage: '',
          span: 24,
          value: '',
        },
        {
          title: 'Repeat Password',
          name: 'repeatPassword',
          label: 'Repeat Password',
          type: 'password',
          isRequired: true,
          description: 'Repeat password',
          validationMessage: '',
          span: 24,
          value: '',
        },
      ],
    },
  ],
};

const userProfile: Form = {
  groups: [
    {
      title: 'Personal Information',
      fields: [
        {
          title: 'First Name',
          label: 'First name',
          type: 'text',
          isRequired: true,
          description: 'Enter your first name',
          validationMessage: '',
          span: 8,
          value: '',
        },
        {
          title: 'Last Name',
          label: 'Last name',
          type: 'text',
          isRequired: true,
          description: 'Enter your last name',
          validationMessage: '',
          span: 8,
          value: '',
        },
        {
          title: 'Gender',
          label: 'Gender',
          type: 'text',
          isRequired: true,
          description: 'Choose gender',
          validationMessage: '',
          span: 8,
          value: '',
        },
        {
          title: 'Date of Birth',
          label: 'Date of Birth',
          type: 'text',
          isRequired: true,
          description: 'Enter your date of birth',
          validationMessage: '',
          span: 8,
          value: '',
        },
        {
          title: 'Hospital ID',
          label: 'Hospital ID',
          type: 'text',
          isRequired: true,
          description: 'Enter hospital id',
          validationMessage: '',
          span: 8,
          value: '',
        },
      ],
    },
    {
      title: 'Contact Information',
      fields: [
        {
          title: 'Email',
          label: 'Email',
          type: 'text',
          isRequired: true,
          description: 'Enter valid email',
          validationMessage: '',
          span: 8,
          value: '',
        },
        {
          title: 'Phone number',
          label: 'Phone number',
          type: 'text',
          isRequired: true,
          description: 'Enter phone number',
          validationMessage: '',
          span: 8,
          value: '',
        },
        {
          title: 'Address',
          label: 'Address',
          type: 'text',
          isRequired: true,
          description: 'Enter Address',
          validationMessage: '',
          span: 8,
          value: '',
        },
      ],
    },
  ],
};
const userRolesPermissions: Form = {
  groups: [
    {
      title: 'Roles and permissions',
      fields: [
        {
          title: 'User role',
          label: 'User role',
          type: 'text',
          isRequired: true,
          description: 'Select user role',
          validationMessage: '',
          span: 24,
          value: '',
        },
        {
          title: 'User permissions',
          label: 'User permissions',
          type: 'text',
          isRequired: true,
          description: 'Select user permissions',
          validationMessage: '',
          span: 24,
          value: '',
        },
      ],
    },
  ],
};
export const userForms = {
  createUser,
  updateUser,
  changeUserPassword,
  userProfile,
  userRolesPermissions,
};
