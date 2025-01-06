import { useContext } from 'react';
import * as yup from 'yup';
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import { dataLanguagesEnPt, dataLanguagesPtEn } from '../../components/Languages/Languages';

const useValidations = () => {
  const languageContext  = useContext(LanguageContext);
  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  return yup.object().shape({
    Nome: yup.string().required(translations.Validations.preenchaCampo),
    Email: yup
      .string()
      .email(translations.Validations.invalidEmail)
      .required(translations.Validations.preenchaCampo),
    Telefone: yup
      .string()
      .min(14)
      .test(
        'qtd',
        translations.Validations.invalidNumber,
        (val: any) => val?.trim().length >= 14,
      )
      .required(translations.Validations.preenchaCampo),
  });
};

export default useValidations;
