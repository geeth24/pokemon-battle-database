import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import { Button } from './ui/button';
type Match = {
  id: string;
  challenger: string;
  defender: string;
  winner: string;
  gym: string;
};

const matches: Match[] = [
  { id: '1', challenger: 'Ash', defender: 'Gary', winner: 'Ash', gym: 'Cerulean Gym' },
  { id: '2', challenger: 'Ash', defender: 'Misty', winner: 'Misty', gym: 'Pewter Gym' },
  { id: '3', challenger: 'Ash', defender: 'Brock', winner: 'Ash', gym: 'Vermilion Gym' },
  { id: '4', challenger: 'Ash', defender: 'Lt. Surge', winner: 'Lt. Surge', gym: 'Celadon Gym' },
  { id: '5', challenger: 'Ash', defender: 'Erika', winner: 'Ash', gym: 'Fuchsia Gym' },
];

export function MatchesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[180px]">Gym</TableHead>
          <TableHead>Leader</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {matches.map((match) => (
          <TableRow key={match.id}>
            <TableCell>{match.challenger}</TableCell>
            <TableCell>{match.defender}</TableCell>
            <TableCell>{match.winner}</TableCell>
            <TableCell>{match.gym}</TableCell>
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
