import React from 'react';
import CustomUserImg from '../../assets/10.png'

interface TextPillProps {
  label: string;
  image?: string;
  onRemove: () => void;
}

const TextPill: React.FC<TextPillProps> = ({ label, image, onRemove }) => {
  return (
    <div className="p-3 flex items-center bg-gray-200 rounded-full">
      <img className="h-8 w-8 rounded-full" src={image ? image : CustomUserImg} alt="Person name" title="User avatar" />
      <h2 className="ml-2 cursor-default">{label}</h2>
      <button className="ml-2 text-red-500" title="Remove" onClick={onRemove}>
        X
      </button>
    </div>
  );
};

export default TextPill;
