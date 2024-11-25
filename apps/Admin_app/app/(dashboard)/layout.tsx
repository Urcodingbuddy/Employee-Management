// app/(dashboard)/layout.tsx
import { ReactNode } from "react";
import Appbar from "../../components/Appbar";


export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Appbar />
        <main className="h-screen w-screen">{children}</main>
      </body>
    </html>
  );
}
