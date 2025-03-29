import { login } from '../../../apis/users/auth'
import { buttonStyle } from '../../../assets/styles/buttons'
import { inputStyle } from '../../../assets/styles/fields'
import { SITE_NAME } from '../../../constants'
import { userSignInValidationSchema } from '../../../schemas/users/validations'
import { useAuth, useForm } from '../../../services/hooks'
import { Button, Field } from '../../../utils/components'


type SignInSchema = typeof userSignInValidationSchema.__default

const SingIn: React.FC = () => {
  
  const { setLoggedUserState } = useAuth()
  const { form } = useForm<SignInSchema>({
    onSubmit: authenticateUser,
    validationSchema: userSignInValidationSchema,
  })
  
  async function authenticateUser(values: Record<string, string>) {
    const response = await login(values.username, values.password)
    if (response.error) {
      if (response.error.detail) {
        alert(response.error.detail)
      } else {
        const errors = response.error as SignInSchema
        alert(JSON.stringify(errors))
      }
    } else {
      const { access, refresh } = response.data!
      await setLoggedUserState(access, refresh)
      form.resetForm()
      alert('Inicio de sesión exitoso.!!')
    }
  }
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
            Iniciar sesión
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
                textLabel='Contraseña'
                labelProps={{
                  className: `block text-sm/6 font-medium text-gray-900`
                }}
                inputProps={{
                  className: inputStyle,
                  type: 'password',
                  name: 'password',
                  id: 'password',
                  autoComplete: 'password',
                  onChange: form.handleChange,
                  value: form.values.password,
                }}
              />
              <div className={`text-sm`}>
                <a
                  href='/password-recovery'
                  className={`
                    font-semibold
                    text-indigo-600
                    hover:text-indigo-500
                  `}
                >
                  Recuperar contraseña
                </a>
              </div>
            </div>
            <div>
              <Button
                buttonText='Enviar'
                buttonProps={{
                  type: 'submit',
                  className:  buttonStyle,
                  disabled: !form.isValid || !form.dirty
                }}
                classOnDisabled={`opacity-50`}
              />
            </div>
          </form>
          <p className={`mt-10 text-center text-sm/6 text-gray-500`}>
            Aún no tienes una cuenta?&nbsp;
            <a
              href='/sign-up'
              className={`font-semibold text-indigo-600 hover:text-indigo-500`}
            >
              Registrarse
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingIn
