export default function StoreInfo() {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-6">Our Information</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl mb-3">Address</h3>
          <p className="mb-1">456 Artisan Way, Suite 201</p>
          <p>Brooklyn, NY 11201</p>
        </div>
        
        <div>
          <h3 className="text-xl mb-3">Contact</h3>
          <p className="mb-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:alla@nox.boutique" className="text-accent hover:underline">
              alla@nox.boutique
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+18885550197" className="text-accent hover:underline">
              (888) 555-0197
            </a>
          </p>
        </div>
        
        <div>
          <h3 className="text-xl mb-3">Hours</h3>
          <p className="mb-1">
            <strong>Monday-Friday:</strong> 9am-6pm EST
          </p>
          <p>
            <strong>Saturday-Sunday:</strong> Closed
          </p>
        </div>
        
        <div>
          <h3 className="text-xl mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://instagram.com/NoxBoutique" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com/NoxBoutique" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://pinterest.com/NoxBoutique" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M21 12c0 4.418 -4.03 8 -9 8a9.863 9.863 0 0 1 -4.255 -.949l-3.745 .976l1.148 -3.97a9 9 0 1 1 15.853 -5.058"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
