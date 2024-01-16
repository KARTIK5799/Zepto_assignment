import React from 'react';
import TextPill from '../TextPill/TextPill';
import SearchBox from '../SearchBox/SearchBox';

const Form = () => {
  return (
    <div>
      <form>
        <h1 className="text-3xl font-bold text-blue-700">
          Pick User
        </h1>

        <div className="border-b-2 border-blue-500 flex flex-wrap items-center gap-2">
          <TextPill />
          <TextPill />
          <TextPill />
          <TextPill />
          <TextPill />
          <SearchBox />
        </div>
      </form>
    </div>
  );
};

export default Form;
