export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          JSN.KIM
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Welcome to my personal space on the web
        </p>

        <div className="mt-8 space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Building something amazing...
          </p>
        </div>
      </div>
    </main>
  )
}