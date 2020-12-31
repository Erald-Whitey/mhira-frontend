import { Permission } from './permission';
import { User } from './user';

export interface Role {
  id: number;
  name: string;
  guard: string;
  createdAt?: number;
  updatedAt?: number;
  users?: User[];
  permissions?: Permission[];
}

export interface UpdateOneRoleInput {
  id: number;
  update: {
    name: string;
    guard: string;
  };
}
