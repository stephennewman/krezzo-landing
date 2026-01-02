import { Footer } from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen font-space bg-white flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <img 
          src="/images/krezzo-logo.png" 
          alt="Krezzo" 
          className="w-64 sm:w-80 md:w-96 h-auto"
        />
        <a
          href="https://calendly.com/stephen-krezzo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 px-8 py-4 text-lg font-medium text-white bg-primary-600 rounded-lg shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all duration-200"
        >
          Get in touch
        </a>
      </main>
      <Footer />
    </div>
  )
}

export default App
