import Image from 'next/image';

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent = ({ src, alt }: ImageComponentProps) => {
  return <Image src={src} alt={alt} fill style={{ userSelect: 'none', zIndex: 1 }} />;
};

export default ImageComponent;
