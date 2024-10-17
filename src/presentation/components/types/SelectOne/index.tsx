import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";;

function SelectOne({ setFormValues, field, formValues }: any) {
  const setValue = (value: any) => {
    setFormValues((prev: any) => {
      const newValues = { ...prev };
      newValues[field?.name] = value;
      return newValues;
    });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };
  return (
    <div className="field">
      <label className="field-text">{field?.name ?? "Text"}</label>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Selection</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formValues[field?.name] ?? "10"}
          label="Selection"
          onChange={handleChange}
        >
          <MenuItem value={10}>Selection 1</MenuItem>
          <MenuItem value={20}>Selection 2</MenuItem>
          <MenuItem value={30}>Selection 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectOne;
