import React from 'react';
import type { AppProps } from 'next/app'
import '../app/globals.css' // Import global styles directly

function MyApp({ Component, pageProps }: AppProps) {
  // Update the error state type to include Error  
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    // Clear any existing service workers
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    }

    // Handle preloaded resources
    const preloadLinks = document.querySelectorAll('link[rel="preload"]');
    preloadLinks.forEach(link => {
      if (link instanceof HTMLLinkElement) {
        link.setAttribute('as', 'style'); // Set appropriate 'as' value for CSS
      }
    });
  }, []); // Empty dependency array means this runs once on mount

  if (error) {
    return (
      <div>
        <h2>Something went wrong!</h2>
        <button onClick={() => window.location.reload()}>
          Reload page
        </button>
      </div>
    );
  }

  try {
    return <Component {...pageProps} />
  } catch (err) {
    // Type assert err as Error
    setError(err as Error);
    return null;
  }
}

export default MyApp