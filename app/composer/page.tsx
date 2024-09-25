"use client";

import Composer from '../../components/Composer';  
import { useRouter } from 'next/navigation';
import PhaseAccordion from '../../components/phases/PhaseAccordion';

export default function ComposerPage() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goForward = () => {
    router.push('/nextPageRoute');
  };

  return (
    <div className="relative min-h-screen pb-20">
      {/* Title */}
      <div className="flex flex-col items-center justify-start pt-8">
        <h1 className="text-4xl font-bold text-center">Composer</h1>

        <div className="w-full max-w-5xl mx-auto mt-4">
          {/* Render de accordion met de bouwblokken */}
          <PhaseAccordion phase="Introductie" />
          <PhaseAccordion phase="Instructie" />
          <PhaseAccordion phase="Verwerking" />
          <PhaseAccordion phase="Afronding" />
        </div>
      </div>

      {/* Navigation Buttons - Fixed in the bottom right corner */}
      <div className="fixed bottom-4 right-4 flex justify-end space-x-4">
        <button
          onClick={goBack}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Ga terug
        </button>
        <button
          onClick={goForward}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Ga verder
        </button>
      </div>
    </div>
  );
}
