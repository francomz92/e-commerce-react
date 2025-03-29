interface Props {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>
  textLabel: string
}

export const Field: React.FC<Props> = (props: Props) => {
  return (
    <>
      <label {...props.labelProps} htmlFor={props.inputProps.id}>
        {props.textLabel}
      </label>
      <div className={`mt-2`}>
        <input {...props.inputProps}/>
      </div>
    </>
  )
}