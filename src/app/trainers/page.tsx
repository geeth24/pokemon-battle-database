import { Trainer, Trainers } from '@/components/trainers';
import React from 'react';

async function getData() {
  const res = await fetch(`http://0.0.0.0:4000/trainer`, {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Page() {
  const data = await getData();
  const trainers: Trainer[] = data.trainers;
  return (
    <div>
      <Trainers trainers={trainers} />
    </div>
  );
}

export default Page;
