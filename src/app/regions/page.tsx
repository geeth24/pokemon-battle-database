import { RegionsTable } from '@/components/regions-table';
import { Button } from '@/components/ui/button';
import React from 'react';

function Page() {
  return (
    <section className="flex flex-col p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Regions</h1>
        <Button>Add Region</Button>
      </div>

      <hr className="my-4" />
      <RegionsTable />
    </section>
  );
}

export default Page;
