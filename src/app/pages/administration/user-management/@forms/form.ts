import { FormItemType } from '../../../../@shared/components/form-generator/form-item.type';
import { Form } from '../../../../@shared/components/field-generator/formt';

const changeUserPassword: Form = {
  submitButtonText: 'Change password',
  groups: [
    {
      fields: [
        {
          title: 'Enter New Password',
          name: 'newPassword',
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
          name: 'newPasswordConfirmation',
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
  submitButtonText: 'Save User',
  editButtonText: 'Edit User',
  submitButtonClass: 'right-align-submit',
  groups: [
    {
      title: 'Personal Information',
      fields: [
        {
          title: 'First Name',
          label: 'First name',
          name: 'firstName',
          type: 'text',
          isRequired: true,
          description: 'Enter your first name',
          validationMessage: 'Please enter your Firsrt name',
          span: 8,
          value: '',
        },
        {
          title: 'Middle Name',
          label: 'Middle name',
          name: 'middleName',
          type: 'text',
          isRequired: false,
          description: 'Enter your middle name',
          validationMessage: 'Please enter your Middle name',
          span: 8,
          value: '',
        },
        {
          title: 'Last Name',
          label: 'Last name',
          name: 'lastName',
          type: 'text',
          isRequired: true,
          description: 'Enter your last name',
          validationMessage: 'Please enter your last name',
          span: 8,
          value: '',
        },
        {
          value: '',
          name: 'gender',
          title: 'Gender',
          label: 'Gender',
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
        {
          value: '',
          title: 'Date of Birth',
          name: 'birthDate',
          label: 'Date of Birth',
          description: 'Enter date of birth',
          type: 'date',
          validationMessage: 'please enter date of birth',
          isRequired: false,
          span: 8,
        },
        {
          title: 'Work ID',
          label: 'Work ID',
          name: 'workID',
          type: 'text',
          isRequired: false,
          description: 'Enter work id',
          validationMessage: 'Please fill in Work ID',
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
          name: 'email',
          type: 'text',
          isRequired: false,
          description: 'Enter valid email',
          validationMessage: 'Please enter valid email',
          span: 8,
          value: '',
        },
        {
          title: 'Phone number',
          label: 'Phone number',
          name: 'phone',
          type: 'text',
          isRequired: false,
          description: 'Enter phone number',
          validationMessage: 'Please fill phone number',
          span: 8,
          value: '',
        },
        {
          title: 'Address',
          label: 'Address',
          name: 'address',
          type: 'text',
          isRequired: false,
          description: 'Enter Address',
          validationMessage: 'Please fill address',
          span: 8,
          value: '',
        },
      ],
    },
    {
      title: 'User Credentials',
      fields: [
        {
          title: 'Login Username',
          label: 'Username',
          name: 'username',
          type: 'text',
          isRequired: true,
          description: 'Enter Username',
          validationMessage: 'Please enter valid username',
          span: 8,
          value: '',
        },
        {
          title: 'Password',
          label: 'Password',
          name: 'password',
          type: 'password',
          isRequired: true,
          description: 'Enter Password',
          validationMessage: 'Please fill password',
          span: 8,
          value: '',
        },
        {
          title: 'Repeat Password',
          name: 'passwordConfirmation',
          label: 'Repeat Password',
          type: 'password',
          isRequired: true,
          description: 'Repeat password',
          validationMessage: '',
          span: 8,
          value: '',
        },
      ],
    },
  ],
};

const userProfileEdit: Form = {
  submitButtonText: 'Save User',
  editButtonText: 'Edit User',
  submitButtonClass: 'right-align-submit',
  groups: [
    {
      title: 'Personal Information',
      fields: [
        {
          title: 'First Name',
          label: 'First name',
          name: 'firstName',
          type: 'text',
          isRequired: true,
          description: 'Enter your first name',
          validationMessage: 'Please enter your First name',
          span: 8,
          value: '',
        },
        {
          title: 'Middle Name',
          label: 'Middle name',
          name: 'middleName',
          type: 'text',
          isRequired: true,
          description: 'Enter your middle name',
          validationMessage: 'Please enter your Middle name',
          span: 8,
          value: '',
        },
        {
          title: 'Last Name',
          label: 'Last name',
          name: 'lastName',
          type: 'text',
          isRequired: true,
          description: 'Enter your last name',
          validationMessage: 'Please enter your last name',
          span: 8,
          value: '',
        },
        {
          value: '',
          name: 'gender',
          title: 'Gender',
          label: 'Gender',
          description: 'Select Gender',
          type: 'select',
          validationMessage: 'please select gender',
          isRequired: true,
          options: [
            { label: 'Male', value: 'MALE' },
            { label: 'Female', value: 'FEMALE' },
          ],
          span: 8,
        },
        {
          value: '',
          title: 'Date of Birth',
          name: 'birthDate',
          label: 'Date of Birth',
          description: 'Enter date of birth',
          type: 'date',
          validationMessage: 'please enter date of birth',
          isRequired: true,
          span: 8,
        },
        {
          title: 'Work ID',
          label: 'Work ID',
          name: 'workID',
          type: 'text',
          isRequired: true,
          description: 'Enter work id',
          validationMessage: 'Please fill in Work ID',
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
          name: 'email',
          type: 'text',
          isRequired: false,
          description: 'Enter valid email',
          validationMessage: 'Please enter valid email',
          span: 8,
          value: '',
        },
        {
          title: 'Phone number',
          label: 'Phone number',
          name: 'phone',
          type: 'text',
          isRequired: false,
          description: 'Enter phone number',
          validationMessage: 'Please fill phone number',
          span: 8,
          value: '',
        },
        {
          title: 'Address',
          label: 'Address',
          name: 'address',
          type: 'text',
          isRequired: false,
          description: 'Enter Address',
          validationMessage: 'Please fill address',
          span: 8,
          value: '',
        },
        {
          title: 'Active',
          label: 'active',
          name: 'address',
          type: 'checkBox',
          isRequired: false,
          description: 'Enable user',
          validationMessage: '',
          span: 8,
          value: '',
        },
      ],
    },
    {
      title: 'User Credentials',
      fields: [
        {
          title: 'Login Username',
          label: 'Username',
          name: 'username',
          type: 'text',
          isRequired: true,
          description: 'Enter Username',
          validationMessage: 'Please enter valid username',
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

const userFilter: Form = {
  groups: [
    {
      fields: [
        {
          title: '',
          label: 'First name',
          name: 'firstName',
          type: 'text',
          isRequired: false,
          description: 'First name',
          validationMessage: '',
          span: 24,
          value: '',
        },
        {
          title: '',
          label: 'Last name',
          name: 'lastName',
          type: 'text',
          isRequired: false,
          description: 'Last name',
          validationMessage: '',
          span: 24,
          value: '',
        },
        {
          value: '',
          title: '',
          name: 'gender',
          label: 'Gender',
          description: 'Gender',
          type: 'select',
          validationMessage: 'please enter value',
          isRequired: false,
          options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ],
          span: 24,
        },
        {
          value: '',
          title: '',
          label: 'Date Registered',
          name: 'createdAt',
          description: 'Enter date',
          type: 'date',
          validationMessage: 'please enter date',
          isRequired: false,
          span: 24,
        },
      ],
    },
  ],
};
export const userForms = {
  changeUserPassword,
  userProfile,
  userRolesPermissions,
  userProfileEdit,
  userFilter,
};
