import { useEffect } from "react";

const usePayPalScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AY6hSDhLsVitPW1QYB420Oa8etdMf63aLJ21fWmkrOaDqBvpOIbbLQxT9y_XjcLKK7t1SJDna53FRwWA";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  },);
};

export default usePayPalScript;