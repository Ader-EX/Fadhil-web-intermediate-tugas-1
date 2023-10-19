'use client';
require('dotenv').config();

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import catOne from '../img/catone.jpg';
import CatTwo from '../img/cat-2.png';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GlobComp from '../components/GlobalComponent';
import ModComp from '../components/ModuleComponent';
import TailComp from '../components/TailwindComponent';
export default function Home() {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_WIKIPEDIA_URL);
  }, []);
  return (
    <main className="items-center justify-between min-h-screen p-24 space-y-6 bg-slate800">
      <div className="text-lg text-center ">Welcome to my Pets website</div>
      <div className="">
        <Image
          className="w-[110%]"
          src={catOne}
          alt="A Cat staring at the butterfly"
        />
        <p>A Cat Staring at the butterfly</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 gap-2">
        <div>
          <Image className="" src={CatTwo} alt="Test" />
          <p>My Cat</p>
        </div>
        <div>
          <picture>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg"
              alt="test"
              className=""
            />
            <p>My Friend`s Cat</p>
          </picture>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 gap-2 font-bold text-center text-slate800">
        <Link href="./dogs" className="p-3 bg-white rounded-md">
          See Dogs
        </Link>
        <Link href="./hamster" className="p-3 bg-white rounded-md">
          See Hamsters
        </Link>
      </div>
      <div>
        <Link
          href="./responsive"
          className="flex p-3 font-bold text-center bg-white rounded-md align-center text-slate800"
        >
          Responsive Page
        </Link>
      </div>
      <div>
        <h1 className="mb-5">Berbagai macam Styling</h1>
        <GlobComp />
        <ModComp />
        <TailComp />
      </div>
    </main>
  );
}
