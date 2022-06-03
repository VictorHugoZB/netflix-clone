import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button<{ color?: string, bgColor?: string, bgHoverColor?: string }>`
  background-color: ${({ bgColor }) => bgColor || 'rgba(109, 109, 110, 0.7)'};
  color: ${({ color }) => color || 'white'};
  transition: all .3s;
  padding: .5rem .8rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${({ bgHoverColor }) => bgHoverColor || 'rgba(109, 109, 110, 0.4)'};
    cursor: pointer;
  }
`;

interface ButtonProps {
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  color?: string
  bgColor?: string
  bgHoverColor?: string
  Icon?: React.ElementType
  children: React.ReactNode
}

export default function MainButton({
  onClick, color, bgColor, bgHoverColor, Icon, children,
}: ButtonProps) {
  return (
    <Button color={color} bgColor={bgColor} bgHoverColor={bgHoverColor} onClick={onClick}>
      {Icon && (
        <Icon sx={{ color: color || 'white', fontSize: '1.7rem', marginRight: '10px' }} />
      )}
      <div>
        {children}
      </div>
    </Button>
  );
}
