
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "./ui/button"
type Gym = {
  name: string
  leader: string
  region: string
}

const gyms: Gym[] = [
  { name: "Cerulean Gym", leader: "Misty", region: "Kanto" },
  { name: "Pewter Gym", leader: "Brock", region: "Kanto" },
  { name: "Vermilion Gym", leader: "Lt. Surge", region: "Kanto" },
  { name: "Celadon Gym", leader: "Erika", region: "Kanto" },
  { name: "Fuchsia Gym", leader: "Janine", region: "Kanto" },
]

export function GymTable() {
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
        {gyms.map((gym) => (
          <TableRow key={gym.name}>
            <TableCell>{gym.name}</TableCell>
            <TableCell>{gym.leader}</TableCell>
            <TableCell>{gym.region}</TableCell>
            <TableCell className="flex space-x-2">
              <Button
              variant="outline"
              >Edit</Button>
              <Button
              variant="destructive"
              >Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
