import Link from "next/link";
import Newsletter from "./home/Newsletter";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="footer-title">NOX BOUTIQUE</h3>
            <p className="mb-4">
              Premium handcrafted luxury candles made with natural waxes,
              essential oils, and carefully selected fragrances.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/NoxBoutique" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com/NoxBoutique" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://pinterest.com/NoxBoutique" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M21 12c0 4.418 -4.03 8 -9 8a9.863 9.863 0 0 1 -4.255 -.949l-3.745 .976l1.148 -3.97a9 9 0 1 1 15.853 -5.058"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="footer-title">SHOP</h3>
            <Link href="/shop" className="footer-link">All Products</Link>
            <Link href="/shop?collection=signature" className="footer-link">Signature Collection</Link>
            <Link href="/shop?collection=seasonal" className="footer-link">Seasonal Collection</Link>
            <Link href="/shop?collection=limited" className="footer-link">Limited Editions</Link>
            <Link href="/shop?collection=gift" className="footer-link">Gift Sets</Link>
          </div>
          
          <div>
            <h3 className="footer-title">INFORMATION</h3>
            <Link href="/our-process" className="footer-link">Our Process</Link>
            <Link href="/scent-guide" className="footer-link">Scent Guide</Link>
            <Link href="/contact" className="footer-link">Contact Us</Link>
            <Link href="/contact#faq" className="footer-link">FAQ</Link>
            <Link href="/shipping-policy" className="footer-link">Shipping Policy</Link>
            <Link href="/return-policy" className="footer-link">Return Policy</Link>
          </div>
          
          <div>
            <h3 className="footer-title">CONTACT US</h3>
            <p className="mb-2">456 Artisan Way, Suite 201</p>
            <p className="mb-4">Brooklyn, NY 11201</p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:alla@nox.boutique" className="hover:text-accent">
                alla@nox.boutique
              </a>
            </p>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+18885550197" className="hover:text-accent">
                (888) 555-0197
              </a>
            </p>
            <p className="mb-2">
              <strong>Hours:</strong> Monday-Friday 9am-6pm EST
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Nox Boutique. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy-policy" className="hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-accent">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
