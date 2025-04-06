import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [isDark, setIsDark] = useState(true)

  // Toggle dark class on root HTML element
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white p-6 font-mono transition-colors duration-300">
      
      {/* Header */}
      <header className="mb-8 border-b border-gray-300 dark:border-gray-700 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-wide text-purple-600 dark:text-purple-400">
            WALLos
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Your productivity-enhanced desktop
          </p>
        </div>
        
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="border border-gray-500 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {/* Main Content */}
      <main className="space-y-6">
        
        {/* Spotify Connect Button */}
        <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-all">
          🎵 Connect Spotify
        </button>

        {/* Google Calendar Connect Button */}
        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all">
          📆 Connect Google Calendar
        </button>

        {/* Timeline Placeholder */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg mt-6 shadow-md">
          <h2 className="text-2xl mb-2">🧠 Timeline</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Track habits, goals, and productivity. Coming soon.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
