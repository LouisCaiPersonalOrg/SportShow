'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  // Additional details for the event page
  startTime?: string;
  endTime?: string;
  participants?: string[];
  organizer?: string;
  rules?: string;
  registrationDeadline?: string;
}

export default function EventDetails() {
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockEvent: Event = {
      id: params.id as string,
      title: 'Annual Track and Field Day',
      date: '2024-05-15',
      location: 'Main Stadium',
      description: 'Annual inter-house track and field competition featuring various athletic events.',
      status: 'upcoming',
      startTime: '09:00 AM',
      endTime: '5:00 PM',
      participants: ['Team A', 'Team B', 'Team C', 'Team D'],
      organizer: 'Sports Department',
      rules: '1. All participants must register before the deadline\n2. Proper sports attire is mandatory\n3. Each participant can enter up to 3 events',
      registrationDeadline: '2024-05-01'
    };

    setEvent(mockEvent);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-300">Loading...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Event not found</h1>
            <Link href="/events" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              ← Back to Events
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/events" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            ← Back to Events
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{event.title}</h1>
              <span
                className={`px-3 py-1 text-sm rounded-full ${event.status === 'upcoming'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : event.status === 'ongoing'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  }`}
              >
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Event Details</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Date:</span> {event.date}</p>
                    <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Time:</span> {event.startTime} - {event.endTime}</p>
                    <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Location:</span> {event.location}</p>
                    <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Organizer:</span> {event.organizer}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h2>
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Participants</h2>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {event.participants?.map((participant, index) => (
                      <li key={index}>{participant}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Rules</h2>
                  <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{event.rules}</div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Registration</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Registration Deadline:</span> {event.registrationDeadline}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Register for Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}