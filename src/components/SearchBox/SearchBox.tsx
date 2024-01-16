import React from 'react';

const SearchBox = () => {
  return (
    <div className='flex grow'>
      <input
        type="text"
        id="input"
        name="input"
        className="flex-1 mt-1 p-4 text-xl  w-full focus:border-none focus:outline-none rounded-md"
      />
    </div>
  );
};

export default SearchBox;
