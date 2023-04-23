import React from 'react';

const NailCard = ({heading}) => {
  return (
    <div className='flex items-initial justify-left h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>

{/* create a darker overlay over photo */}

      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/90 z-[2]' />
      <div className='p-5 text-white z-[2]'>
        <h2 className='text-5xl font-bold pb-5'>{heading}</h2>
        <button className='px-8 py-2 border'>Randomize</button>
      </div>
    </div>
  );
};

export default NailCard;