import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20 dark:opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            School Sports Day Management
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
            Organize, participate, and celebrate school sporting events with our modern platform
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/events" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              View Events
            </a>
            <a href="/sign-in" className="px-8 py-3 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
              Sign In
            </a>
            <a href="/sign-up" className="px-8 py-3 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
              Sign Up
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Live Event Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">Real-time updates and live streaming of ongoing events</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Event Management</h3>
              <p className="text-gray-600 dark:text-gray-300">Easy creation and management of sporting events</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Results & Rankings</h3>
              <p className="text-gray-600 dark:text-gray-300">Comprehensive results and school rankings system</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">© 2024 School Sports Day Management. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

