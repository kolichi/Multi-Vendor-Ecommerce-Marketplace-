import { useEffect } from 'react';


const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;


export const MyComponent = props => {
    useScript("https://checkout.flutterwave.com/v3.js");
  
    // rest of your component
  }