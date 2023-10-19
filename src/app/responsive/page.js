import React from 'react';
import { League_Spartan } from 'next/font/google';

const lSpartan = League_Spartan({ subsets: ['latin'], weight: '500' });

function ResponsivePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-black bg-slate800">
      <div className="w-full p-4 bg-white rounded-lg shadow-md md:w-3/4 lg:w-1/2 xl:w-1/3">
        <div className={lSpartan.className}>
          <h1 className="mb-4 text-3xl font-semibold text-center text-slate-800">
            This is the responsive Page
          </h1>
        </div>
        <p className="text-lg text-center text-slate-800">
          You can make the content adapt to the size of the screen
        </p>
      </div>
    </div>
  );
}

export default ResponsivePage;
