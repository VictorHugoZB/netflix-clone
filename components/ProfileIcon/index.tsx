import styled from '@emotion/styled';

const Container = styled.div<{ width?: string, height?: string }>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};

  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img<{ width?: string, height?: string }>`
  width: ${({ width }) => (width ? '100%' : 'auto')};
  height: ${({ height }) => (height ? '100%' : 'auto')};
  border-radius: 10%;
`;

export default function ProfileIcon(
  { width, height, imageUrl } : { width?: string, height?: string, imageUrl: string },
) {
  return (
    <Container width={width} height={height}>
      <Image width={width} height={height} src={imageUrl} alt="Avatar Icon" />
    </Container>
  );
}
