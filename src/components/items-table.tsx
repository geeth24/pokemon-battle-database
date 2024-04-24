import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import { Button } from './ui/button';
type Item = {
  name: string;
  effect: string;
  price: number;
};

const items: Item[] = [
  { name: 'Potion', effect: 'Heals 20 HP', price: 200 },
  { name: 'Super Potion', effect: 'Heals 50 HP', price: 700 },
  { name: 'Hyper Potion', effect: 'Heals 200 HP', price: 1200 },
  { name: 'Max Potion', effect: 'Heals all HP', price: 2500 },
  { name: 'Revive', effect: 'Revives fainted Pokémon', price: 1500 },
];

export function ItemsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[180px]">Item</TableHead>
          <TableHead>Effect</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.effect}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell className="flex space-x-2">
              <Button variant="outline">Edit</Button>
              <Button variant="destructive">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
