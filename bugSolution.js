```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId); // Cleanup function to clear the interval
    };
  }, []);

  return <div>Count: {count}</div>;
}
```