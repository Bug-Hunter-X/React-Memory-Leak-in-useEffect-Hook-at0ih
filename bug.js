```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setTimeout, creating a memory leak
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    return () => {
      //This is missing
    };
  }, []);

  return <div>Count: {count}</div>;
}
```