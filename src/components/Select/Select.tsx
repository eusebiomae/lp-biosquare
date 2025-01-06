import { ErrorMessage } from 'formik';
import React, { useContext } from 'react';
import {
  BoxInput,
  CustomStylesProps,
  Error,
  Input,
  Label,
} from './styles';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import { dataLanguagesEnPt, dataLanguagesPtEn } from '../Languages/Languages';

interface OptionProps {
  label: string;
  value: string | number;
}

interface SelectProps {
  label: string;
  name: string;
  options: OptionProps[];
  custom?: CustomStylesProps;
  mb?: number;
  mt?: number;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  custom,
  mb,
  mt,
}) => {
  const languageContext  = useContext(LanguageContext);
  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt
  return (
    <BoxInput mb={mb} mt={mt}>
      <Label htmlFor={name} label={custom?.label}>
        {label}
      </Label>

      <Input name={name} id={name} component="select">
        <option value="" disabled selected>
          { translations.Contact.selectmodal }
        </option>

        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Input>

      <Error>
        <ErrorMessage name={name} />
      </Error>
    </BoxInput>
  );
};

export default Select;
