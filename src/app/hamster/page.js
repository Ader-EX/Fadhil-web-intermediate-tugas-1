import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

const page = () => {
  return (
    <main className="items-center justify-between min-h-screen p-24 space-y-6 bg-slate800">
      <div className="text-lg text-center ">Welcome to my Pets website</div>
      <Link className="hover:cursor-pointer" href="./hamster/1">
        <Image
          alt="Test"
          width={1200}
          height={50}
          src="https://upload.wikimedia.org/wikipedia/commons/b/be/Dwarf_hamster_Minica.jpg"
        />
        <p>My sister`s Hamster</p>
      </Link>

      <div className="grid grid-cols-2 grid-rows-1 gap-2">
        <Link className="hover:cursor-pointer" href="./hamster/2">
          <Image
            className=""
            width={800}
            height={400}
            src="https://upload.wikimedia.org/wikipedia/id/3/30/Hamster_duitama.jpg"
            alt="Test"
          />
          <p>My Hamster</p>
        </Link>
        <div>
          <Link href="./hamster/3">
            <Image
              className=""
              width={800}
              height={400}
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Hamster_in_hand.jpg"
              alt="Test"
            />
            <p>My Friend`s Hamster</p>
          </Link>
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
