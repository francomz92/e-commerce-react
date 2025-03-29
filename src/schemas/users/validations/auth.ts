import * as Yup from "yup";


export const userSignUpValidationSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(8, 'El nombre de usuario debe tener al menos 8 caracteres')
    .required('El nombre de usuario es obligatorio'),
  email: Yup
    .string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
  password: Yup
    .string()
    .required('La contraseña es obligatoria'),
  password2: Yup
    .string()
    .required('La contraseña es obligatoria')
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
});

export const userSignInValidationSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(8, 'El nombre de usuario debe tener al menos 8 caracteres')
    .required('El nombre de usuario es obligatorio'),
  password: Yup
    .string()
    .required('La contraseña es obligatoria'),
});