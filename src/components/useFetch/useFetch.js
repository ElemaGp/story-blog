import {useState, useEffect} from 'react';


const useFetch = (url) => {
    const [data, setData] = useState (null);
    const [isPending, setIsPending] = useState (true);
    const [error, setError] = useState (null);

    useEffect(() => {
      const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal})
          .then(res=> {
            if(!res.ok) {
              throw Error("could not fetch data for that resource");
            }
            return res.json()
          })
          .then(data => {
            setData(data); //note that the "data" here refers to the parsed data from json which is then set to the object we want it to become it's value. We named our object "data" in this case. Here,  it doesn't matter that the names clash because the parsed "data" is a local scope while our object "data" is a global scope.
            setIsPending(false);
            setError(null); //you set so that in case there was an error on the first try, setError aka Error goes back to null when it works
          })
          .catch(err => {
            if (err.name === "AbortError"){
              console.log("fetch aborted");
            } else {
            setIsPending(false);
            setError(err.message);
            }
          })
          
          return () => abortCont.abort(); //this aborts the fetch whenever the component finishes loading or if it is unmounted before it finishes loading (eg if you quickly clicked to another route before it finishes loading the data)
      }, [url]); //This means that it's only when  the url changes that the useEffect will re-render.

      return { data,  isPending, error}
}


export default useFetch;