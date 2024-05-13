import { useEffect, useLayoutEffect, useState } from 'react';

export default function Footer() {
  const [isFooterFixed, setIsFooterFixed] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      const contentHeight = document.body.clientHeight;
      const windowHeight = window.innerHeight;

      setIsFooterFixed(windowHeight > contentHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsFooterFixed(window.innerHeight > document.body.clientHeight);
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto inset-x-0 bottom-0 ${
        isFooterFixed ? 'fixed' : ''
      }`}
    >
      <div className="text-center">
        <div>
          <p
            className="flex-none text-xl font-semibold text-black"
            aria-label="Brand"
          >
            e-MET
          </p>
        </div>
        <div className="mt-3">
          <p className="text-gray-500">All the artworks of the MET online.</p>
          <p className="text-gray-500">
            © SupInfo Proj 2024 BenG2. The C&E. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
