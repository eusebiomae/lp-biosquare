import AOS from 'aos';
import 'aos/dist/aos.css';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../Layout';
import { About, Contact, ExpoModal, Hero, Localization, TecnicalSpecs, TechnicalInformation } from '../container';
import { ActionsFloating, BackToTopButton, Modal } from '../components';
import { ChatForm, ContactForm, PhoneForm, WhatsAppForm } from '../forms';
import { iconChatWhite } from '../assets/icons';

const AppPage: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentModal, setCurrentModal] = useState('');

  useEffect(() => { AOS.init(); }, []);

  const modals: any = {
    contact: {
      title: 'Fale com a nossa equipe',
      content: <ContactForm />,
    },
    email: {
      title: 'Entre em contato por e-mail',
      content: <ContactForm />,
    },
    chat: {
      title: 'Fale com um corretor',
      content: <ChatForm />,
    },
    whatsapp: {
      title: 'Fale conosco por whatsapp',
      content: <WhatsAppForm />,
    },
    phone: {
      title: 'Ligamos para você',
      content: <PhoneForm />,
    },
  };

  const handleOpenModal = (value: string) => {
    setOpenModal(true);
    setCurrentModal(value);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentModal('');
  };

  const floatings = [
    {
      icon: iconChatWhite,
      label: 'Envie um e-mail',
      action: () => handleOpenModal('email'),
    },
  ];

  return (
    <Layout>
      <ActionsFloating data={floatings} />

      <BackToTopButton />
      <Hero />
      <About />
      <Localization />
      <TecnicalSpecs />
      <TechnicalInformation />
      <Contact />

      <Modal
        open={openModal}
        expo={<ExpoModal title={modals[currentModal]?.title} />}
        onClose={handleCloseModal}
      >
        {modals[currentModal]?.content}
      </Modal>
    </Layout>
  );
};

export default AppPage;
