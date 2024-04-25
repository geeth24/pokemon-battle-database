'use client';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';

export type Trainer = {
  trainer_id: number;
  name: string;
  gym_leader: boolean;
};
export function Trainers({ trainers: initialTrainers }: { trainers: Trainer[] }) {
  const [trainers, setTrainers] = useState<Trainer[]>(initialTrainers);
  const [newTrainer, setNewTrainer] = useState<Trainer>({
    trainer_id: 0,
    name: '',
    gym_leader: false,
  });

  const createTrainer = async (trainer: Trainer) => {
    const res = await fetch(`http://0.0.0.0:4000/trainer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trainer),
    });

    if (!res.ok) {
      throw new Error('Failed to create trainer');
    }
    setTrainers([...trainers, newTrainer]);
  };

  const deleteTrainer = async (trainer_id: number) => {
    const res = await fetch(`http://0.0.0.0:4000/trainer/${trainer_id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error('Failed to delete trainer');
    }
  };

  return (
    <section className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="col-span-1 flex justify-between sm:col-span-2 md:col-span-3 lg:col-span-4">
        <h2 className="text-2xl font-semibold">Trainers</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Trainer
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add Trainer</SheetTitle>
              <SheetDescription>Add a new trainer to the list of trainers.</SheetDescription>
              <div className="space-y-4">
                <div className="mt-4 flex flex-col space-y-2">
                  <Label htmlFor="trainer-name">Name</Label>
                  <Input
                    id="trainer-name"
                    placeholder="Ash Ketchum"
                    value={newTrainer.name}
                    onChange={(e) => setNewTrainer({ ...newTrainer, name: e.target.value })}
                  />
                </div>
                <div className="mt-4 flex space-x-2">
                  <Checkbox
                    id="trainer-gym_leader"
                    checked={newTrainer.gym_leader}
                    onCheckedChange={(checked) =>
                      setNewTrainer({ ...newTrainer, gym_leader: checked as boolean })
                    }
                  />
                  <Label htmlFor="trainer-gym_leader">Gym Leader</Label>
                </div>

                <div className="mt-8 space-x-4">
                  <SheetClose asChild>
                    <Button
                      onClick={() => {
                        createTrainer(newTrainer);
                        setNewTrainer({ trainer_id: 0, name: '', gym_leader: false });
                      }}
                    >
                      Add Trainer
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      {trainers.map((trainer) => (
        <Card key={trainer.trainer_id}>
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage alt="Ash Ketchum" src="/ash-ketchum.jpg" />
                <AvatarFallback>{trainer.name[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <Link className="font-semibold hover:underline" href="#">
                  {trainer.name}
                </Link>
                {trainer.gym_leader && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <ShieldIcon className="h-4 w-4" />
                    <span>Gym Leader</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="outline">
                <FileEditIcon className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button
                className="text-red-500 hover:bg-red-500 hover:text-white"
                size="icon"
                variant="outline"
              >
                <TrashIcon className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
}

function FileEditIcon(props: any) {
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
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function ShieldIcon(props: any) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

function TrashIcon(props: any) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
