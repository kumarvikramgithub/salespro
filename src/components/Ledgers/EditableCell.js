import  React from "react";

function EditableCell({type="text", getValue,row,column,table}) {
  const initialValue= getValue();
  const [value, setValue] = React.useState(initialValue);
  const onBlur = () => {
    table.options.meta?.updateData(row.index,
      column.id, value);
  }
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  console.log(row);
  return (
    <input value={value} onChange={
      (e) => setValue(e.target.value)}
      onBlur={onBlur}
      type={type} focus="true"/>
      
  )
}

export default EditableCell
