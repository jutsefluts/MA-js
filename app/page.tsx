"use client";  // This marks the component as a Client Component

import '../styles/globals.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  // Function to navigate to the lesson details page
  const goToLessonDetails = () => {
    router.push('/lesson_details');  // Adjust the route as per your setup
  };

  return (
    <div className="relative min-h-screen pb-20">
      {/* Title and Content */}
      <div className="flex flex-col items-center justify-start pt-8">
        <h1 className="text-4xl font-bold text-center">Welcome to the Home Page</h1>
        <p className="text-lg text-center mt-4">This is the main content for the home page.</p>
      </div>

      {/* Navigation Button - Aligned in the bottom right */}
      <div className="fixed bottom-4 right-4 flex justify-end">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          onClick={goToLessonDetails}
        >
          Ga verder
        </button>
      </div>
    </div>
  );
}
