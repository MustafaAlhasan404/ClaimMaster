import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/insurance-verification" className="hover:text-blue-300">
                  Insurance Verification
                </Link>
              </li>
              <li>
                <Link href="/services/dental-virtual-assistant" className="hover:text-blue-300">
                  Dental Virtual Assistant
                </Link>
              </li>
              <li>
                <Link href="/services/insurance-billing" className="hover:text-blue-300">
                  Insurance Billing and AR
                </Link>
              </li>
              <li>
                <Link href="/services/accounting" className="hover:text-blue-300">
                  Dental Accounting and Bookkeeping
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">2025 Guadalupe Street, Suite 260</p>
              <p className="mb-4">Austin, Texas 78705</p>
              
              <p className="mb-2">
                <a href="mailto:info@claimmastersdentalbilling.com" className="hover:text-blue-300">
                  info@claimmastersdentalbilling.com
                </a>
              </p>
              
              <p>
                <a href="tel:+17379002401" className="hover:text-blue-300">
                  +17079934501
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-300">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center mb-8">
          <Image 
            src="/images/Asset 1 2.png" 
            alt="ClaimMasters Dental Billing Logo" 
            width={150} 
            height={150} 
            className="h-20 w-auto mb-4"
          />
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} ClaimMasters Dental Billing | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 