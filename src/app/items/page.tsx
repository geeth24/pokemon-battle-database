import { ItemsTable } from '@/components/items-table';
import { Button } from '@/components/ui/button';
import React from 'react';

function Page() {
  return (
    <section className="flex flex-col p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Items</h1>
        <Button>Add Item</Button>
      </div>

      <hr className="my-4" />
      <ItemsTable />
    </section>
  );
}

export default Page;
