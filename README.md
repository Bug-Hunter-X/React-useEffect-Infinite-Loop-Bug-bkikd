# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook and infinite loops.  The bug stems from incorrectly updating state within the useEffect's dependency array, leading to a continuous re-rendering cycle.

## Bug Description
The `MyComponent` function utilizes `useState` to manage a count variable. The `useEffect` hook attempts to increment the count on every render. However, because `count` is included in the dependency array, the effect runs again immediately, triggering another update, thus creating an infinite loop.  This will usually result in your application crashing or becoming unresponsive.

## Solution
The solution involves removing `count` from the dependency array or correctly handling state updates to prevent the infinite loop.