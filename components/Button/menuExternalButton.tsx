import styled from "styled-components";
import { IconExternalArrow } from "../Images";

export const ExternalButtonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
    transition: all 0.2s linear;

    z-index: 2;
    padding: 10px 0;

    &:hover {
    }
`;

export const ExternalTypo = styled.p`
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;

    @media only screen and (max-width: 1180px) {
        font-size: 14px;
    }
`;

interface IProps {
    title: string;
    onClick: () => void;
}

const MenuExternalButton = ({ title, onClick }: IProps) => {
    return (
        <ExternalButtonWrap onClick={onClick}>
            <ExternalTypo>{title}</ExternalTypo>
            <IconExternalArrow />
        </ExternalButtonWrap>
    );
};

export default MenuExternalButton;
