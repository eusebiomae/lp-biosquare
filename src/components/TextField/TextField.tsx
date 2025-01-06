import { ErrorMessage, Field } from 'formik';
import React from 'react';
import MaskedInput from 'react-input-mask';
import {
  BoxInput,
  CustomStylesProps,
  Error,
  Label,
  ValidationProps,
} from './styles';

export interface RenderProps {
  field: Field;
  form: Form;
  meta: Meta;
}
export interface Field {
  name: string;
  value: string;
}
export interface Form {
  values: ValuesOrInitialValues;
  errors: Errors;
  touched: Touched;
  isSubmitting: boolean;
  isValidating: boolean;
  submitCount: number;
  initialValues: ValuesOrInitialValues;
  initialErrors: InitialErrorsOrInitialTouched;
  initialTouched: InitialErrorsOrInitialTouched;
  isValid: boolean;
  dirty: boolean;
  validateOnBlur: boolean;
  validateOnChange: boolean;
  validateOnMount: boolean;
}
export interface ValuesOrInitialValues {
  channel: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}
export interface Errors {
  phone: string;
}
export interface Touched {
  channel: boolean;
  name: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
}
export interface InitialErrorsOrInitialTouched {}
export interface Meta {
  value: string;
  error: string;
  touched: boolean;
  initialValue: string;
  initialTouched: boolean;
}

interface TextFieldProps {
  label: string;
  name: string;
  mask?: string;
  custom?: CustomStylesProps;
  mb?: number;
  mt?: number;
  status: () => ValidationProps;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  mask,
  custom,
  mb,
  mt,
  status,
}) => {
  const { isError, isValid } = status();

  return (
    <BoxInput
      mb={mb}
      mt={mt}
      isValid={isValid}
      isError={isError}
    >
      <Label htmlFor={name} label={custom?.label}>
        {label}
      </Label>

      <Field
        name={name}
        id={name}
        render={({ field }: RenderProps) => (
          <MaskedInput
            {...field}
            mask={mask as string}
            maskChar=" "
            id={field.name}
          />
        )}
      />

      <Error>
        <ErrorMessage name={name} />
      </Error>
    </BoxInput>
  );
};

export default TextField;
