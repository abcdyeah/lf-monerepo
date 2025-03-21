import React from 'react';

interface ToggleButtonProps {
  isActive: boolean;
  onToggle: () => void;
}

export const ToggleButton = ({ isActive, onToggle }: ToggleButtonProps) => {
  return (
    <div>
      <button onClick={onToggle}>{isActive ? '关闭' : '开启'}</button>
      <p>状态: {isActive ? '活跃' : '非活跃'}</p>
    </div>
  );
};