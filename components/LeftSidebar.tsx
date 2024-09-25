"use client";  // This is a client component to handle navigation logic

export default function LeftSidebar() {
  return (
    <aside className="w-24 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-8">
      {/* Sidebar items */}
      <div className="flex flex-col items-center">
        <img src="/icons/home.svg" alt="Home" className="w-6 h-6" />
        <span className="text-sm font-semibold mt-2">Home</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="/icons/plus.svg" alt="Maak les aan" className="w-6 h-6" />
        <span className="text-sm font-semibold mt-2">Maak les aan</span>
      </div>

      {/* Additional icons */}
      <div className="flex flex-col items-center">
        <img src="/icons/settings.svg" alt="Settings" className="w-6 h-6" />
        <span className="text-sm font-semibold mt-2">Settings</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="/icons/upgrade.svg" alt="Upgrade" className="w-6 h-6" />
        <span className="text-sm font-semibold mt-2">Upgrade</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="/icons/library.svg" alt="Bibliotheek" className="w-6 h-6" />
        <span className="text-sm font-semibold mt-2">Bibliotheek</span>
      </div>
    </aside>
  );
}
