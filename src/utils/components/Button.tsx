interface Props extends React.PropsWithChildren {
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>
  buttonText: string
  classOnDisabled?: string
}

export const Button: React.FC<Props> = (props: Props) => {
  if (props.buttonProps.disabled && props.classOnDisabled) {
    props.buttonProps.className = `
      ${props.buttonProps.className}
      ${props.classOnDisabled}
    `
  }
  return (
    <button {...props.buttonProps}>
      {props.buttonText}
      {props.children}
    </button>
  )
}