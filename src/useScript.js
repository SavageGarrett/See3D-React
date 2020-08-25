import { useEffect } from 'react';

/**
 * Adds Script to Web Page
 * @param {String} url path to script
 * @param {Boolean} isasync script set to async
 */
const useScript = (url, isasync) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = isasync;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url, isasync]);
};

export default useScript;