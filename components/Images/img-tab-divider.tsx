import styled from 'styled-components';

const Divider = styled.div`
  width: 1px;
  background-color: #000;
  opacity: 0.2;
  transition: all 0.2s ease-in-out;
`;

interface IProps {
  height: string | number;
  invisible: boolean;
  color?: string;
}

const ImageTabDivider = ({ height, invisible, color = '#000' }: IProps) => {
  return <Divider style={{ minHeight: height, opacity: invisible ? 0 : 0.2, backgroundColor: color }} />;
};

export default ImageTabDivider;
