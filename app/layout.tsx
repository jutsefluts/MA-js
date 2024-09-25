// File: app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Left Sidebar */}
          <LeftSidebar />

          {/* Main Content Area */}
          <main className="flex-1 p-8">
            {children}
          </main>

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}