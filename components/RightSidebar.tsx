"use client";

export default function RightSidebar() {
  return (
    <aside className="w-96 bg-white p-4 border-l border-gray-200">
      {/* Leeropbrengst Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-md font-semibold">Leeropbrengst</h3>
        <p className="text-sm text-gray-600 mt-2">
          Ik wil dat ze weten wat de 5 P’s zijn en ze kunnen toepassen
        </p>
      </div>
      {/* Optional Spacer (if needed) */}
      <div className="h-20"></div> {/* This can be adjusted or removed */}
      {/* Feedback Section */}
      <div className="bg-gray-100 p-6 rounded-lg mb-4">
        <div>
          <h3 className="text-md font-semibold">Feedback</h3>
          <p className="text-sm text-gray-600 mt-2">
            Hier verschijnt feedback van MaxAssist.
          </p>
        </div>
        <img src="/icons/MA.svg" alt="MaxAssist Logo" className="w-10 h-10 self-start mt-4" />
      </div>
    </aside>
  );
}
