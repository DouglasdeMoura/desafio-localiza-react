import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
    background: string,
    color: string,
    backgroundHover: string,
    colorHover: string
}

export const ButtonTag: FC<IProps> = styled.button`
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    padding: 15px;
    outline: none;
    min-width: 120px;
    border: 3px solid ${(props) => props.color};
    border-radius: 30px;
    font-weight: bold;

    &:hover {
       background: ${(props) => props.backgroundHover};
       color: ${(props) => props.colorHover};
       border-color: ${(props) => props.colorHover};
    }
`;
