import React, { FC, ReactNode } from 'react';
import { ButtonTag } from './styled-components';

interface IButton {
    children: ReactNode,
    color: string,
    background: string,
    backgroundHover: string,
    colorHover: string,
    onClick?: () => {}
}

const Button: FC<IButton> = ({
  children, background, color, backgroundHover, colorHover,
}) => {
  return (
    <div>
      <ButtonTag
        backgroundHover={backgroundHover}
        colorHover={colorHover}
        background={background}
        color={color}
      >
        {children}

      </ButtonTag>
    </div>
  );
};

export default Button;
