export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:pr-16 lg:px-8 xl:mt-28 xl:pr-24">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Unlock your</span>{' '}
                <span className="block text-primary-600 xl:inline">financial freedom</span>
              </h1>
              <p className="mt-3 text-base text-neutral-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Krezzo texts you with a budget analysis when you spend money, so you can always be in the know.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#getstarted"
                    className="btn-primary"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#learnmore"
                    className="btn-secondary"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img 
          src="https://moccasin-emera-9.tiiny.site/krezzo-gradient.jpg" 
          alt="Krezzo gradient" 
          className="h-56 w-full object-cover sm:h-72 lg:h-full lg:w-full"
        />
      </div>
    </div>
  )
} 