import React from 'react'
import { Field } from 'react-final-form'
import { Input } from "../controls/external"

const CustomInput = () => ({
  input: { name, onChange, value, type, ...restInput },
  meta,
  ...rest
}) => (
  <Input
    {...rest}
    name={name}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    value={value}
    type={type}
  />
)

export const BaseField = () => {
  return(
    <Field>
    
    </Field>
  )
}