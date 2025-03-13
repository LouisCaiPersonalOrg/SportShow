'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

// TODO: Replace with actual role check
const isAdmin = false;

export default function Events() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Annual Track and Field Day',
      date: '2024-05-15',
      location: 'Main Stadium',
      description: 'Annual inter-house track and field competition featuring various athletic events.',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'Swimming Gala',
      date: '2024-06-01',
      location: 'Olympic Pool',
      description: 'Inter-school swimming competition with multiple categories and age groups.',
      status: 'upcoming'
    }
  ]);

  const handleCreateEvent = () => {
    // TODO: Implement event creation logic
  };

  const handleEditEvent = (eventId: string) => {
    // TODO: Implement event editing logic
  };

  const handleDeleteEvent = (eventId: string) => {
    // TODO: Implement event deletion logic
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Sports Events</h1>
          {isAdmin && (
            <button
              onClick={handleCreateEvent}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Event
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <Link href={`/events/${event.id}`} className="block p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h2>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      event.status === 'upcoming'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : event.status === 'ongoing'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}
                  >
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Date:</span> {event.date}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Location:</span> {event.location}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {event.description}
                  </p>
                </div>
              </Link>
              {isAdmin && (
                <div className="mt-6 flex space-x-3">
                  <button
                    onClick={() => handleEditEvent(event.id)}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    className="px-3 py-1 text-sm bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 rounded hover:bg-red-200 dark:hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}