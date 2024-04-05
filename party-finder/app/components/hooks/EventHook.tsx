import {useCallback } from "react";
//deprecated code. Use TanStack Form instead

export default function HandleFormState(values:any, setValues:any
) {

  const handleChange = useCallback((e: any) => {
    setValues((prevValues:any) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleChangeBoolean = useCallback((e: any) => {
    setValues((prevValues:any) => ({
      ...prevValues,
      [e.target.name]: e.target.checked,
    }));
  }, []);
 
  const TypeHandler = (e:any) => {
    if (e.target.type === "checkbox") {
      handleChangeBoolean(e);
    } else {
      handleChange(e);
    }
  }
  return TypeHandler;
}
