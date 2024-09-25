"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LessonDetails() {
  const router = useRouter();

  // Define states for each field in the form
  const [subject, setSubject] = useState('');
  const [audience, setAudience] = useState('');
  const [learningOutcome, setLearningOutcome] = useState('');

  const goForward = () => {
    router.push('/composer'); // Navigate to composer page
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div className="relative min-h-screen pb-20">
      <div className="flex flex-col items-center justify-start pt-8">
        <h1 className="text-4xl font-bold text-center mb-6">Lesson Details</h1>
      </div>

      <div className="flex flex-col items-center space-y-6 px-8">
        {/* Onderwerp Section */}
        <div className="bg-gray-100 p-4 rounded-lg shadow w-full max-w-3xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Onderwerp</h3>
              <p className="text-sm text-gray-600">Waar gaat de les over?</p>
            </div>
            <button className="bg-orange-500 text-white rounded-full p-2 text-xs">
              i
            </button>
          </div>
          <input
            type="text"
            placeholder="Bijvoorbeeld: klimaatverandering, geometrische vormen, 19e-eeuwse literatuur"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
          <p className="text-sm text-orange-600 mt-2">
            Beschrijf kort het hoofdthema van de les. Zorg ervoor dat het onderwerp duidelijk en specifiek is.
          </p>
        </div>

        {/* Doelgroep Section */}
        <div className="bg-gray-100 p-4 rounded-lg shadow w-full max-w-3xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Doelgroep</h3>
              <p className="text-sm text-gray-600">Voor wie maak je de les?</p>
            </div>
            <button className="bg-orange-500 text-white rounded-full p-2 text-xs">
              i
            </button>
          </div>
          <input
            type="text"
            placeholder="Bijvoorbeeld: 8 jaar primair onderwijs, volwassenen in bedrijfstraining"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
          <p className="text-sm text-orange-600 mt-2">
            Geef de leeftijd en vorm van onderwijs of training aan. Denk bijvoorbeeld aan primair onderwijs of een specifieke bedrijfstraining.
          </p>
        </div>

        {/* Leeropbrengst Section */}
        <div className="bg-gray-100 p-4 rounded-lg shadow w-full max-w-3xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Leeropbrengst</h3>
              <p className="text-sm text-gray-600">Wat moet de doelgroep na de les beheersen?</p>
            </div>
            <button className="bg-orange-500 text-white rounded-full p-2 text-xs">
              i
            </button>
          </div>
          <input
            type="text"
            placeholder="Bijvoorbeeld: de lerende kan uitleggen wat klimaatverandering is en vijf geometrische vormen tekenen"
            value={learningOutcome}
            onChange={(e) => setLearningOutcome(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
          <p className="text-sm text-orange-600 mt-2">
            Beschrijf wat de leerling na afloop van de les kan of weet. Geef hierbij specifieke voorbeelden of leerdoelen aan.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
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