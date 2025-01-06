import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { PulseLoader } from 'react-spinners';
import {
  Box,
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

const Email: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [onFailure, setOnFailure] = useState(false);
  const { isDesktop } = useWindowSize();

  const onSubmit = async (values: any) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `https://hubid360.com.br/api/mensagem`,
        {
          ...values,
          ...config(),
        },
      );

      ReactGA.event({
        category: 'Contato',
        action: 'Sucesso Email',
      });

      TagManager.dataLayer({ dataLayer: { event: 'Sucesso Email' } });

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
        <Text variant="h2Mobile">Recebemos seu contato!</Text>
        <Text variant="h2Mobile">
          Aguarde nosso retorno em breve.
        </Text>

        <button onClick={() => setOnSuccess(false)}>
          VOLTAR
        </button>
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

  return (
    <>
      {!isDesktop && (
        <Text mb={24} color={theme.colors.yellow}>
          Fale com a nossa equipe.
        </Text>
      )}

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
                <TextField
                  name="Nome"
                  label="Qual o seu nome?"
                  status={() => getStatus('Nome')}
                />

                <TextField
                  name="Email"
                  label="Poderia nos informar um e-mail?"
                  status={() => getStatus('Email')}
                />

                <TextField
                  name="Telefone"
                  label="E um telefone para contato?"
                  mask="(99) 99999-9999"
                  status={() => getStatus('Telefone')}
                />

                <Textarea
                  name="Mensagem"
                  label="Mensagem"
                  status={() => getStatus('Mensagem')}
                />

                <button disabled={isSubmitting}>
                  SOLICITAR CONTATO
                </button>
              </>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Email;
