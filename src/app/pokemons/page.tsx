import { Pokemons } from '@/components/pokemons';
import { Button } from '@/components/ui/button';
import React from 'react';

function Page() {
  return (
    <section className="flex flex-col p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Pokemons</h1>
        <Button>Add Pokemon</Button>
      </div>
      <hr className="my-4" />
      <Pokemons />
    </section>
  );
}

export default Page;
