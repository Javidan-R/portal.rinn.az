import { useFormik } from "formik";

interface CustomFormProps<T> {
    initialValues: T;
    onSubmit: (values: T) => void;
    validationSchema: (values: T) => Record<string, string>;
    children: React.ReactNode;
  }
  
  const CustomForm = <T extends Record<string, unknown>>({ initialValues, onSubmit, validationSchema, children }: CustomFormProps<T>) => {
    const formik = useFormik({
      initialValues,
      validate: validationSchema,
      onSubmit,
    });
  
    return <form onSubmit={formik.handleSubmit}>{children}</form>;
  };
  export default CustomForm;