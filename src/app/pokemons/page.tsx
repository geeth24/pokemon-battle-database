import { Pokemon, Pokemons } from '@/components/pokemons';
import { Button } from '@/components/ui/button';
import React from 'react';
async function getData() {
  const res = await fetch(`http://0.0.0.0:4000/pokemon`, {
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
  const pokemons: Pokemon[] = data.pokemons;
  return (
    <section className="flex flex-col p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Pokemons</h1>
        <Button>Add Pokemon</Button>
      </div>
      <hr className="my-4" />
      <Pokemons pokemons={pokemons} />
    </section>
  );
}

export default Page;
