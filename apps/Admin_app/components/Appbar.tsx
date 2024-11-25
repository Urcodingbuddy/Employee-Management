'use client';

import Link from 'next/link';

export default function Appbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-[#5c3ac5] via-[#3c2f6f] to-[#0e022a] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Dashboard</h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/Employees" passHref>
              <button className="text-white hover:underline">
                Employees
              </button>
            </Link>
          </li>
          <li>
            {/* You can add more links here if needed */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

