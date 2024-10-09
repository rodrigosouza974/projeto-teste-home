import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background-color: #565656;
    color: #FFFF;
    padding: 2px 12px;
    border-radius: 22px;
    min-width: 120px;
    width: 100%;
    position: relative;

    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px; 
        height: 33px;
        background: #e4105d;
        position: relative; 

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;  // Corrigido aqui
        }
    `}
`;
