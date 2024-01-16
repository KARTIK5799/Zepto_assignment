import React from 'react'

const TextPill = () => {
  return (
    <div>
      <div className="p-3 flex items-center bg-gray-200 rounded-full">
            
              <img
                className="h-8 w-8 rounded-full"
                src="/assets/images/avatar2.jpg"
                alt="Person name"
                title="User avatar"
              />
            
           
             <h2 className='ml-2 cursor-default'> Pill Label</h2>
           
            <button className="ml-2 text-red-500" title="Remove">
              X
            </button>
          </div>
    </div>
  )
}

export default TextPill
