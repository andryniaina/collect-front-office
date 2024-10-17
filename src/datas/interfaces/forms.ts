export interface IField {
  type: string;
  name: string;
  required: boolean;
  validation: {
    message: string;
    comparator: string;
    value: string;
  };
  options: any[];
  conditions: any[];
  group: string;
  _id: string;
}

export interface IForm {
  _id: string;
  version: string;
  name: string;
  description: string;
  category: string;
  fields: IField[];
  status: string;
  groups: string[];
  createdAt: string;
  updatedAt: string;
}
