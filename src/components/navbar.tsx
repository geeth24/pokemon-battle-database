'use client';
import React from 'react';
import { links } from '@/app/page';
import Link from 'next/link';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
      <Link href="/" className="text-2xl font-semibold">
        Pokemon Battle Database
      </Link>

      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Button variant="ghost" asChild>
                <Link href={link.href}>{link.name}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
