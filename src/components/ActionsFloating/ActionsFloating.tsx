import React from 'react';
import { useWindowSize } from '../../providers';
import { BoxIcon, BoxText, Btn, Floating } from './styles';

interface ItemProps {
  icon: string;
  label: string;
  action: () => void;
}

interface ActionsFloatingProps {
  data: ItemProps[];
}

const ActionsFloating: React.FC<ActionsFloatingProps> = ({
  data,
}) => {
  const { isDesktop } = useWindowSize();

  return (
    <Floating>
      {data.map((item: ItemProps) => (
        <Btn
          key={item.label}
          onClick={item.action}
          data-aos={isDesktop ? 'fade-up' : 'fade-left'}
          data-aos-delay={isDesktop ? '1500' : '0'}
          data-aos-duration={isDesktop ? '2000' : '1000'}
          data-aos-anchor="anchor"
        >
          {isDesktop && (
            <BoxText variant="button">{item.label}</BoxText>
          )}

          <BoxIcon>{<img src={item.icon} alt='Icone Floating' />}</BoxIcon>
        </Btn>
      ))}
    </Floating>
  );
};

export default ActionsFloating;
