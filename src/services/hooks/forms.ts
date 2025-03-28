import { FormikValues, useFormik } from 'formik';
import { AnyObject, ObjectSchema } from 'yup';


interface UseFormProps<T> {
  initialValues?: Partial<T>;
  onSubmit?: CallableFunction;
  onReset?: CallableFunction;
  validationSchema?: ObjectSchema<{}, AnyObject>
}

export const useForm = <T extends FormikValues>(config: UseFormProps<T>) => {
  const formik = useFormik<T>({
    initialValues: config.initialValues ?? Object({}),
    onSubmit: async (values) => {
      await config.onSubmit?.(values);
    },
    onReset: async () => {
      return await config.onReset?.()
    },
    validationSchema: config.validationSchema
  });
  return { form: formik };
}
