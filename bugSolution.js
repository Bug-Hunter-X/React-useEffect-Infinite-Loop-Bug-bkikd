```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic:  only run the effect when a related value changes (example only)
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId); // cleanup function
  }, []); // Empty dependency array means this runs only once on mount

  return <div>Count: {count}</div>;
}
```