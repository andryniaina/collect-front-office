import { IField } from "../../../datas/interfaces/forms";
import Text from "../types/Text";
import Number from "../types/Number";
import SelectOne from "../types/SelectOne";
import MultiSelect from "../types/MultiSelect";
import Point from "../types/Point";
import Date from "../types/Date";
import DateTime from "../types/DateTime";
import File from "../types/File";

interface FieldProps {
  field: IField;
  setFormValues: any;
  formValues: any;
}

const Field = ({ field, setFormValues, formValues }: FieldProps) => {
  switch (field.type) {
    case "text":
      return (
        <Text
          id={field._id}
          field={field}
          setFormValues={setFormValues}
          formValues={formValues}
        />
      );
    case "number":
      return (
        <Number
          id={field._id}
          field={field}
          setFormValues={setFormValues}
          formValues={formValues}
        />
      );
    case "selectOne":
      return (
        <SelectOne
          id={field._id}
          field={field}
          setFormValues={setFormValues}
          formValues={formValues}
        />
      );
    case "multiSelect":
      return (
        <MultiSelect
          id={field._id}
          field={field}
          setFormValues={setFormValues}
          formValues={formValues}
        />
      );
    case "point":
      return <Point />;
    case "date":
      return (
        <Date
          id={field._id}
          field={field}
          setFormValues={setFormValues}
          formValues={formValues}
        />
      );
    case "dateTime":
      return (
        <DateTime
          id={field._id}
          field={field}
          setFormValues={setFormValues}
          formValues={formValues}
        />
      );
    case "file":
      return <File />;
    default:
      return <div>Field</div>;
  }
};

export default Field;
