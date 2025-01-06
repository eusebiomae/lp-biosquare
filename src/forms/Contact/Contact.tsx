import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import ReactGA from 'react-ga';
import { PulseLoader } from 'react-spinners';
import {
  Box,
  Button,
  Checkbox,
  ModalTerm,
  Select,
  Text,
  TextField,
  Textarea,
  ValidationProps,
} from '../../components';
import { config, getUser, useWindowSize } from '../../providers';
import sendEvents from '../../providers/mutate/sendEvent';
import theme from '../../theme';
import initialValues, {
  TypesInitalProps,
} from './initialValues';
import useValidations from './validations';
import TagManager from 'react-gtm-module';
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import { dataLanguagesEnPt, dataLanguagesPtEn } from '../../components/Languages/Languages';

type MessageTypes = 'Email' | 'Whatsapp' | 'Chat' | 'Telefone';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [onFailure, setOnFailure] = useState(false);
  const [messageType, setMessageType] = useState<MessageTypes>();
  const [openTerms, setOpenTerms] = useState(false);
  const { isDesktop } = useWindowSize();
  const languageContext  = useContext(LanguageContext);

  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  const messages = {
    Email: (
      <>
        <Text variant="h2Mobile">Recebemos seu contato!</Text>
        <Text variant="h2Mobile">
          Aguarde nosso retorno em breve.
        </Text>
      </>
    ),
    Whatsapp: (
      <>
        <Text variant="h2Mobile">Conversa iniciada!</Text>
        <Text variant="h2Mobile">
          Uma nova janela foi aberta. Caso não a visualize,
          desative o bloqueador de popup e tente novamente.
        </Text>
      </>
    ),
    Chat: (
      <>
        <Text variant="h2Mobile">Conversa iniciada!</Text>
        <Text variant="h2Mobile">
          Uma nova janela foi aberta. Caso não a visualize,
          desative o bloqueador de popup e tente novamente.
        </Text>
      </>
    ),
    Telefone: (
      <>
        <Text variant="h2Mobile">Recebemos seu contato!</Text>
        <Text variant="h2Mobile">
          Aguarde nosso retorno em breve.
        </Text>
      </>
    ),
  };

  const onSubmit = async (values: any) => {
    setLoading(true);

    const url = ['Chat', 'Whatsapp'].includes(
      values.forma_de_contato,
    )
      ? values.forma_de_contato
      : 'mensagem';

    try {
      const response = await axios.post(
        `https://hubid360.com.br/api/${url.toLowerCase()}`,
        {
          ...values,
          ...config(),
        },
      );

      ReactGA.event({
        category: 'Contato',
        action: `Sucesso ${values.forma_de_contato}`,
      });

      if (
        values.forma_de_contato === 'Chat' ||
        values.forma_de_contato === 'Whatsapp'
      ) {
        window.open(response.data.mensagem, '_blank');
      }

      setMessageType(values.forma_de_contato);

      TagManager.dataLayer({
        dataLayer: { event: `Sucesso ${values.forma_de_contato}`, },
      });

      sendEvents({
        type: 'lead',
        user_id: +getUser()!,
        lead_id: response.data.id,
      });

      setOnSuccess(true);
    } catch (error) {
      setOnFailure(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="50vh"
      >
        <PulseLoader color={theme.colors.green} />
      </Box>
    );
  }

  if (onSuccess) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="50vh"
        color={theme.colors.green}
        gridGap={24}
      >
        {messages[messageType as MessageTypes]}

        <Button
            size={isDesktop ? 'small' : 'full'}
            color="yellow"
            onClick={() => setOnSuccess(false)}
          >
            VOLTAR
        </Button>
      </Box>
    );
  }

  if (onFailure) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="50vh"
        color={theme.colors.green}
        gridGap={24}
      >
        <Text variant="h2Mobile">
          Ops... não foi possível enviar seu contato!
        </Text>
        <Text variant="h2Mobile">
          Por favor, tente novamente.
        </Text>

        <button onClick={() => setOnFailure(false)}>
          TENTAR NOVAMENTE
        </button>
      </Box>
    );
  }

  const contactTypes = [
    {
      value: 'Email',
      label: 'E-mail',
    },
    // {
    //   value: 'Whatsapp',
    //   label: 'Whatsapp',
    // },
    {
      value: 'Telefone',
      label: translations.Contact.telefone,
    },
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={useValidations()}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors, touched }) => {
          const getStatus = (name: TypesInitalProps) => {
            return {
              isValid: !errors[name] && touched[name],
              isError: errors[name] && touched[name],
            } as ValidationProps;
          };

          return (
            <Form>
              <>
                <Select
                  name="forma_de_contato"
                  label={translations.Contact.canal}
                  options={contactTypes}
                />

                <TextField
                  name="Nome"
                  label={translations.Contact.nome}
                  status={() => getStatus('Nome')}
                />

                <TextField
                  name="Email"
                  label={translations.Contact.email}
                  status={() => getStatus('Email')}
                />

                <TextField
                  name="Telefone"
                  label={translations.Contact.telefone}
                  mask="(99) 99999-9999"
                  status={() => getStatus('Telefone')}
                />

                <Textarea
                  name="Mensagem"
                  label={translations.Contact.mensagem}
                  status={() => getStatus('Mensagem')}
                />

                <Checkbox name="terms">
                  {translations.Contact.lgpd1}{' '}
                  <a
                    type="button"
                    onClick={() => setOpenTerms(true)}
                  >
                    {translations.Contact.linklgpd}
                  </a>{' '}
                  {translations.Contact.lgpd2}
                </Checkbox>

                <Button
                  size="full"
                  color="yellow"
                  disabled={isSubmitting}
                  mt={16}
                >
                  {translations.Contact.btn}
                </Button>
              </>
            </Form>
          );
        }}
      </Formik>
      <ModalTerm
        open={openTerms}
        onClose={() => setOpenTerms(false)}
      />
    </>
  );
};

export default Contact;
