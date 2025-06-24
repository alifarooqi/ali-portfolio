import React, { CSSProperties } from 'react';
import CircleButton from '../../CircleButton/CircleButton';
import './MenuItem.scss';

interface MenuItemProps {
  icon: React.ReactNode;
  tooltip: string;
  action: () => void;
  tooltipPlacement: 'bottom' | 'left' | 'right' | 'top';
  menuActive: boolean;
  isMobile: boolean;
  rotationAngle: number;
}

const activeTransformStyle = (angle1: number, angle2: number, isMobile: boolean): string => `
  translateY(${!isMobile ? "-50%" : "0"})
  rotate(${angle1}deg)
  translate(${isMobile ? 7 : 6}rem)
  rotate(${angle2}deg)
`;

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  tooltip,
  action,
  tooltipPlacement,
  menuActive,
  isMobile,
  rotationAngle,
}) => {
  const style: CSSProperties = menuActive
    ? { transform: activeTransformStyle(rotationAngle, -rotationAngle, isMobile)}
    : {};

  return (
    <CircleButton
      className="menu-item"
      tooltip={tooltip}
      onClick={action}
      tooltipPlacement={tooltipPlacement}
      size={isMobile ? 2.5 : 3.5}
      style={style}
    >
      {icon}
    </CircleButton>
  );
};

export default MenuItem;