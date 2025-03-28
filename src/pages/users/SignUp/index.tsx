import { register } from '../../../apis/users/auth'
import { SITE_NAME } from '../../../constants'
import { userSignUpValidationSchema } from '../../../schemas/users/validations'
import { useForm } from '../../../services/hooks/forms'

const registerUser = async (data: Record<string, string>) => {
  const response = await register(
    data.username,
    data.email,
    data.password,
    data.password2
  )
  if (response.error) {
    console.error(response.error)
    return false
  }
  console.info(response.data ?? 'Registro exitoso.!!')
  return true
}

const SignUp = () => {
  type SignUpSchema = typeof userSignUpValidationSchema.__default
  const { form } = useForm<SignUpSchema>({
    onSubmit: registerUser,
    validationSchema: userSignUpValidationSchema,
    onReset: () => form.resetForm(),
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
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
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
              <label
                htmlFor="username"
                className={`block text-sm/6 font-medium text-gray-900`}
              >
                Nombre de usuario
              </label>
              <div className={`mt-2`}>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className={`
                    block
                    w-full
                    rounded-md
                    bg-white
                    px-3
                    py-1.5
                    text-base
                    text-gray-900
                    outline-1
                    -outline-offset-1
                    outline-gray-300
                    placeholder:text-gray-400
                    focus:outline-2
                    focus:-outline-offset-2
                    focus:outline-indigo-600
                    sm:text-sm/6
                  `}
                  onChange={form.handleChange}
                  value={form.values.username}
                />
              </div>
              {form.errors.username && (
                <span className={`mt-2 text-sm/6 text-red-600`}>
                  {form.errors.username}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm/6 font-medium text-gray-900`}
              >
                Correo electrónico
              </label>
              <div className={`mt-2`}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className={`
                    block
                    w-full
                    rounded-md
                    bg-white
                    px-3
                    py-1.5
                    text-base
                    text-gray-900
                    outline-1
                    -outline-offset-1
                    outline-gray-300
                    placeholder:text-gray-400
                    focus:outline-2
                    focus:-outline-offset-2
                    focus:outline-indigo-600
                    sm:text-sm/6
                  `}
                  onChange={form.handleChange}
                  value={form.values.email}
                />
              </div>
              {form.errors.email && (
                <span className={`mt-2 text-sm/6 text-red-600`}>
                  {form.errors.email}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block text-sm/6 font-medium text-gray-900`}
              >
                Contraseña
              </label>
              <div className={`mt-2`}>
                <input
                  type="password"
                  name="password"
                  id='password'
                  className={`
                    block
                    w-full
                    rounded-md
                    bg-white
                    px-3
                    py-1.5
                    text-base
                    text-gray-900
                    outline-1
                    -outline-offset-1
                    outline-gray-300
                    placeholder:text-gray-400
                    focus:outline-2
                    focus:-outline-offset-2
                    focus:outline-indigo-600
                    sm:text-sm/6
                  `}
                  onChange={form.handleChange}
                  value={form.values.password}
                />
              </div>
              {form.errors.password && (
                <span className={`mt-2 text-sm/6 text-red-600`}>
                  {form.errors.password}
                </span>
              )}
            </div>

            <div>
              <div className={`flex items-center justify-between`}>
                <label
                  htmlFor="password2"
                  className={`block text-sm/6 font-medium text-gray-900`}
                >
                  Confirmar contraseña
                </label>
                <div className={`text-sm`}>
                  <a
                    href="/password-recovery"
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
              <div className={`mt-2`}>
                <input
                  type="password2"
                  name="password2"
                  id='password2'
                  className={`
                    block
                    w-full
                    rounded-md
                    bg-white
                    px-3
                    py-1.5
                    text-base
                    text-gray-900
                    outline-1
                    -outline-offset-1
                    outline-gray-300
                    placeholder:text-gray-400
                    focus:outline-2
                    focus:-outline-offset-2
                    focus:outline-indigo-600
                    sm:text-sm/6
                  `}
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
              <button
                type="submit"
                className={`
                  flex
                  w-full
                  justify-center
                  rounded-md
                  bg-indigo-600
                  px-3
                  py-1.5
                  text-sm/6
                  font-semibold
                  text-white
                  shadow-xs
                  hover:bg-indigo-500
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-indigo-600
                `}
              >
                Enviar
              </button>
            </div>
          </form>

          <p className={`mt-10 text-center text-sm/6 text-gray-500`}>
            Ya tienes una cuenta?&nbsp;
            <a
              href="/sign-in"
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