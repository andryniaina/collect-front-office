function Text({ setFormValues, field, formValues }: any) {

  const setValue = (value:any) => {
    setFormValues((prev: any) => {
      const newValues = { ...prev };
      newValues[field?.name] = value;
      return newValues ;
    });
  }
  
  return (
    <div className="field">
      <label className="field-text">{field?.name ?? "Text"}</label>
      <input
        className="input-text"
        type="text"
        name="Texte"
        id="text"
        value={formValues[field?.name]?? ""}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Text;
