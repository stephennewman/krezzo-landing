export function Footer() {
  return (
    <footer className="py-6 text-center">
      <ul className="flex justify-center space-x-4 text-neutral-400 text-sm mb-3">
        <li><a href="/privacy-policy.html" className="hover:text-neutral-600 transition-colors">Privacy Policy</a></li>
        <li><span aria-hidden="true">·</span></li>
        <li><a href="/terms-of-service.html" className="hover:text-neutral-600 transition-colors">Terms of Service</a></li>
      </ul>
      <p className="text-neutral-400 text-xs">
        © 2026 Krezzo, Inc.
      </p>
    </footer>
  );
}
