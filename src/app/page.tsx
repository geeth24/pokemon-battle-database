import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from 'next/link';
type Links = {
  name: string;
  href: string;
};

export const links: Links[] = [
  { name: 'Regions', href: '/regions' },
  { name: 'Gyms', href: '/gyms' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'Pokemons', href: '/pokemons' },
  { name: 'Items', href: '/items' },
  { name: 'Matches', href: '/matches' },
];

export default function Home() {
  return (
    <section className="flex flex-col p-6">
      <div className="flex flex-col items-center justify-center">
        <Image src="/Poke Ball icon.svg" width={300} height={300} alt={''} />
        <h1 className="text-2xl font-semibold">Welcome to the Pokemon Battle Database</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold">Select a category to get started</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map(({ name, href }) => (
            <Link key={name} href={href}>
              <Card className="m-2 p-4">
                <h3 className="text-center text-xl font-semibold">{name}</h3>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
