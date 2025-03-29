import { register } from '../../../apis/users/auth'
import { SITE_NAME } from '../../../constants'
import { userSignUpValidationSchema } from '../../../schemas/users/validations'
import { useForm } from '../../../services/hooks'
import { Button, Field } from '../../../utils/components'
import { buttonStyle } from '../../../assets/styles/buttons'
import { inputStyle } from '../../../assets/styles/fields'


type SignUpSchema = typeof userSignUpValidationSchema.__default

const SignUp: React.FC = () => {
  async function registerUser(data: Record<string, string>) {
    const response = await register(
      data.username,
      data.email,
      data.password,
      data.password2
    )
    if (response.error) {
      if (response.error.detail) {
        alert(response.error.detail)
      } else {
        const errors = response.error as SignUpSchema
        alert(JSON.stringify(errors))
      }
    } else {
      // alert('Registro exitoso, confirme su email para completar el registro')
      alert(response.data.detail)
    }
  }

  const { form } = useForm<SignUpSchema>({
    onSubmit: registerUser,
    validationSchema: userSignUpValidationSchema,
  })

  return (
    <section className={`h-full`}>
      <div
        className={`
          flex
          min-h-full
          flex-col
          justify-center
          px-6
          py-12
          lg:px-8
        `}
      >
        <div className={`sm:mx-auto sm:w-full sm:max-w-sm`}>
          <img
            className={`mx-auto h-10 w-auto`}
            src='/mark.svg'
            alt={SITE_NAME}
          />
          <h2
            className={`
              mt-10
              text-center
              text-2xl/9
              font-bold
              tracking-tight
              text-gray-900
            `}
          >
            Registrarse
          </h2>
        </div>

        <div className={`mt-10 sm:mx-auto sm:w-full sm:max-w-sm`}>
          <form
            className={`space-y-6`}
            onSubmit={form.handleSubmit}
          >
            <div>
              <Field
                textLabel='Nombre de usuario'
                labelProps={{
                  className: `block text-sm/6 font-medium text-gray-900`
                }}
                inputProps={{
                  className: inputStyle,
                  type: 'text',
                  name: 'username',
                  id: 'username',
                  autoComplete: 'username',
                  onChange: form.handleChange,
                  value: form.values.username,
                }}
              />
              {form.errors.username && (
                <span className={`mt-2 text-sm/6 text-red-600`}>
                  {form.errors.username}
                </span>
              )}
            </div>

            <div>
              <Field
                textLabel='Correo electrónico'
                labelProps={{
                  className: `block text-sm/6 font-medium text-gray-900`
                }}
                inputProps={{
                  className: inputStyle,
                  type: 'email',
                  name: 'email',
                  id: 'email',
                  autoComplete: 'email',
                  onChange: form.handleChange,
                  value: form.values.email,
                }}
              />
              {form.errors.email && (
                <span className={`mt-2 text-sm/6 text-red-600`}>
                  {form.errors.email}
                </span>
              )}
            </div>

            <div>
              <Field
                textLabel='Contraseña'
                labelProps={{
                  className: `block text-sm/6 font-medium text-gray-900`
                }}
                inputProps={{
                  className: inputStyle,
                  type: 'password',
                  name: 'password',
                  id: 'password',
                  onChange: form.handleChange,
                  value: form.values.password,
                  autoComplete: 'off',
                }}
              />
              {form.errors.password && (
                <span className={`mt-2 text-sm/6 text-red-600`}>
                  {form.errors.password}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor='password2'
                className={`block text-sm/6 font-medium text-gray-900`}
              >
                Confirmar contraseña
              </label>
              <div className={`mt-2`}>
                <input
                  type='password2'
                  name='password2'
                  id='password2'
                  className={inputStyle}
                  onChange={form.handleChange}
                  value={form.values.password2}
                />
              </div>
              {form.errors.password2 && (
                <span className={`mt-2 text-sm/6 text-red-600`}>
                  {form.errors.password2}
                </span>
              )}
            </div>

            <div>
              <Button
                buttonText='Enviar'
                buttonProps={{
                  type: 'submit',
                  className: buttonStyle,
                  disabled: !form.isValid || !form.dirty
                }}
                classOnDisabled={`opacity-50`}
              />
            </div>
          </form>

          <p className={`mt-10 text-center text-sm/6 text-gray-500`}>
            Ya tienes una cuenta?&nbsp;
            <a
              href='/sign-in'
              className={`font-semibold text-indigo-600 hover:text-indigo-500`}
            >
              Iniciar sesión
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignUp