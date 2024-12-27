# React Memory Leak in useEffect Hook
This repository demonstrates a common React bug: a memory leak caused by improper usage of the useEffect hook with setInterval.  The bug involves forgetting to clear the interval in the cleanup function, leading to the interval continuously running even after the component unmounts.

## Bug Description
The `MyComponent` component uses `useEffect` with `setInterval` to update a counter every second.  However, it fails to clear the interval using `clearInterval` in the cleanup function, resulting in a memory leak.  The interval continues indefinitely after the component is unmounted.

## Solution
The solution involves adding a `clearInterval` call within the cleanup function of the `useEffect` hook. This ensures that the interval is properly stopped when the component is unmounted, preventing the memory leak.