import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

const page = () => {
  return (
    <main className="items-center justify-between min-h-screen p-24 space-y-6 bg-slate800">
      <div className="text-lg text-center ">Welcome to my Pets website</div>
      <Link className="hover:cursor-pointer" href="./dogs/1">
        <Image
          alt="Test"
          width={400}
          height={50}
          src="https://upload.wikimedia.org/wikipedia/commons/a/af/Golden_retriever_eating_pigs_foot.jpg"
        />
        <p>A Dog Eating a Pigs Foot</p>
      </Link>

      <div className="grid grid-cols-2 grid-rows-1 gap-2">
        <Link className="hover:cursor-pointer" href="./dogs/2">
          <Image
            className=""
            width={400}
            height={400}
            src="https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg"
            alt="Test"
          />
          <p>My Dog</p>
        </Link>
        <div>
          <Image
            className=""
            width={400}
            height={400}
            src="https://upload.wikimedia.org/wikipedia/commons/2/21/Dog_In_The_Grass.jpg"
            alt="Test"
          />
          <p>My Friend`s Dog</p>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 gap-2 font-bold text-center text-black">
        <Link href="/" className="p-3 text-black bg-white rounded-md">
          See Cats
        </Link>
        <Link href="./hamster" className="p-3 bg-white rounded-md">
          See Hamsters
        </Link>
      </div>
    </main>
  );
};

export default page;
