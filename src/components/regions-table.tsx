import { Button } from './ui/button';
import { Card } from './ui/card';
import { MapPin, Trash } from 'lucide-react';
type Region = {
  id: string;
  name: string;
};

const regions: Region[] = [
  { id: '1', name: 'Kanto' },
  { id: '2', name: 'Johto' },
  { id: '3', name: 'Hoenn' },
  { id: '4', name: 'Sinnoh' },
  { id: '5', name: 'Unova' },
];

export function RegionsTable() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {regions.map((region) => (
        <Card>
          <div className="flex items-center justify-between p-2">

           <div className='flex items-center gap-4'>
            <MapPin className='w-6 h-6' />
             <h3 className="text-lg font-semibold">{region.name}</h3>
              </div>
            <Button variant="destructive" size="icon" >
                <Trash className='w-4 h-4' />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
