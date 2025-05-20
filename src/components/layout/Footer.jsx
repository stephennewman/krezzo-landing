export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-section py-8 flex flex-col items-center text-center">
        <a href="/" className="flex justify-center items-center mb-2">
          <img 
            src="https://blog.krezzo.com/hs-fs/hubfs/Krezzo-Logo-2023-Dark.png?width=648&height=160&name=Krezzo-Logo-2023-Dark.png" 
            alt="Krezzo Logo" 
            className="h-6 w-auto" 
          />
        </a>
        <p className="text-neutral-400 text-sm">
          Technology and professional services that drive better outcomes.
        </p>
        <div className="mt-3">
          <ul className="flex justify-center space-x-4 text-neutral-400 text-sm">
            <li><a href="/privacy-policy.html" className="hover:text-white">Privacy Policy</a></li>
            <li><span aria-hidden="true">|</span></li>
            <li><a href="/terms-of-service.html" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
        <div className="mt-4 border-t border-neutral-800 pt-4 w-full">
          <p className="text-neutral-400 text-xs">
            © 2025 Krezzo, Inc. Palm Harbor, Florida. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 