import React, { useState } from 'react';
import TextPill from '../TextPill/TextPill';
import SearchBox from '../SearchBox/SearchBox';

interface FormProps { }


const Form: React.FC<FormProps> = () => {
  const [textPills, setTextPills] = useState<{ name: string; image?: string }[]>([]);

  const handleAddTextPill = (text: { name: string; image?: string }) => {
      setTextPills([...textPills, text]);
  };

  const handleRemoveTextPill = (index: number) => {
      const updatedTextPills = textPills.filter((_, i) => i !== index);
      setTextPills(updatedTextPills);
  };

  return (
      <div>
          <form>
              <h1 className="text-3xl font-bold text-blue-700">Pick User</h1>

              <div className="border-b-2 border-blue-500 flex flex-wrap items-center gap-2">
                  {textPills.map((text, index) => (
                      <TextPill key={index} label={text.name} image={text.image} onRemove={() => handleRemoveTextPill(index)} />
                  ))}
                  <SearchBox onAddTextPill={handleAddTextPill} textPills={textPills} handleRemoveTextPill={handleRemoveTextPill} />
              </div>
          </form>
      </div>
  );
};

export default Form;
