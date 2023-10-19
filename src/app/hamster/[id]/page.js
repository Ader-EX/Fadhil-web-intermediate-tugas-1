import React from 'react';

import Image from 'next/image';
import { getHamsterList } from '../../../components/hamsterList';

const page = async ({ params }) => {
  const hData = await getHamsterList(params.id);

  if (!hData) {
    return <div>Data not found</div>;
  }

  return (
    <div className="p-10 bg-slate800">
      <div className="mt-10 text-center border-2 align-center">
        <div>
          <h1 className="text-2xl">{hData.title}</h1>
          <p className="px-10 mb-4 ">{hData.description}</p>

          <div className="flex items-center justify-center ">
            <Image
              alt="Test"
              className="justify-center text-center border-2 "
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Hamster_in_hand.jpg"
              width={400}
              height={400}
              blurDataURL="blur"
            />
          </div>
          <p>Date Added: {hData.date}</p>
          <button className="px-[7rem] py-[3rem] bg-white rounded-md m-[2rem] text-[#810556]">
            Arbitrary Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
