import Link from 'next/link';
import { Card } from './ui/card';

type Attribute = {
  name: string;
  weakness: string;
};

type Ability = {
  name: string;
  damage: number;
  status_effect: string;
};

type Pokemon = {
  name: string;
  abilities?: Ability[];
  attributes?: Attribute[];
};

const pokemons: Pokemon[] = [
  {
    name: 'Pikachu',
    abilities: [
      { name: 'Thunder Shock', damage: 40, status_effect: 'Paralyze' },
      { name: 'Quick Attack', damage: 30, status_effect: 'None' },
    ],
    attributes: [
      { name: 'Electric', weakness: 'Ground' },
      { name: 'Normal', weakness: 'Fighting' },
    ],
  },
  {
    name: 'Charizard',
    abilities: [
      { name: 'Flamethrower', damage: 90, status_effect: 'Burn' },
      { name: 'Fly', damage: 70, status_effect: 'None' },
    ],
    attributes: [
      { name: 'Fire', weakness: 'Water' },
      { name: 'Flying', weakness: 'Electric' },
    ],
  },
  {
    name: 'Bulbasaur',
    abilities: [
      { name: 'Vine Whip', damage: 45, status_effect: 'None' },
      { name: 'Razor Leaf', damage: 55, status_effect: 'None' },
    ],
    attributes: [
      { name: 'Grass', weakness: 'Fire' },
      { name: 'Poison', weakness: 'Psychic' },
    ],
  },
  {
    name: 'Squirtle',
    abilities: [
      { name: 'Water Gun', damage: 40, status_effect: 'None' },
      { name: 'Bubble', damage: 30, status_effect: 'None' },
    ],
    attributes: [
      { name: 'Water', weakness: 'Electric' },
      { name: 'Normal', weakness: 'Fighting' },
    ],
  },
];

export function Pokemons() {
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 px-4 md:gap-8 md:px-6">
        <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
          {pokemons.map((pokemon) => (
            <div className="group relative grid overflow-hidden rounded-lg  [grid-template-areas:stack]" key={pokemon.name}>
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View Pokémon</span>
              </Link>
              <img
                alt="Pokémon Image"
                className="aspect-square w-full object-cover [grid-area:stack]"
                height="300"
                src="/Poke Ball icon.svg"
                width="300"
              />
              <div className="flex flex-1 flex-col justify-end gap-2 rounded-lg bg-black/70 p-4 text-white transition-opacity [grid-area:stack] group-hover:opacity-90 lg:p-6">
                <h3 className="font-semibold tracking-tight">{pokemon.name}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <CloudLightningIcon className="h-4 w-4" />
                  {pokemon.attributes?.map((attribute) => (
                    <span key={attribute.name}>{attribute.name}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <HeartIcon className="h-4 w-4" />
                  <span>120 HP</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BoldIcon className="h-4 w-4" />
                  {pokemon.abilities?.map((ability) => (
                    <span key={ability.name}>{ability.name}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BoldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 12a4 4 0 0 0 0-8H6v8" />
      <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
    </svg>
  );
}

function CloudLightningIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}

function FlameIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function GlassWaterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LeafIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function PillIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}

function PlaneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}
