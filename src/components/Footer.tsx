import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter">
              E<span className="text-brand-orange">2</span><span className="text-brand-blue">M</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your strategic partner in creating memorable events and digital experiences. Not just an organizer, we are your growth catalyst.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-cyan">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/event-organizer" className="hover:text-white transition">Event Organizer</Link></li>
              <li><Link href="/services/wedding-organizer" className="hover:text-white transition">Wedding Organizer</Link></li>
              <li><Link href="/services/creative-digital" className="hover:text-white transition">Creative & Digital</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-cyan">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-cyan">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Jakarta, Indonesia</li>
              <li>hello@e2m.com</li>
              <li>+62 812 3456 7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Event Exposure Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}