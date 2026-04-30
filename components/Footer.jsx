const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black py-6 md:py-8 border-t border-gray-800 pb-24 md:pb-8">
      <div className="container-custom text-center">
        <div className="mb-4 md:mb-6">
          <h4 className="text-white text-base md:text-lg mb-2 md:mb-3">Find me on</h4>
          <div className="flex justify-center space-x-4">
            <a
              href="https://Instagram.com/mr_yom_gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors inline-block"
              aria-label="Instagram Profile"
            >
              <InstagramIcon size={22} className="text-primary" />
            </a>
          </div>
        </div>
        <p className="text-gray-400 text-xs md:text-sm">
          Copyright {year} All rights reserved by{" "}
          <a
            href="https://Instagram.com/mr_yom_gupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-all"
          >
            Rishabh Gupta
          </a>
        </p>
      </div>
    </footer>
  );
}
