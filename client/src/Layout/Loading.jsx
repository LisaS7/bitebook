import { usePromiseTracker } from "react-promise-tracker";

export default function Loading({ message, showLoading = false }) {
  const { promiseInProgress } = usePromiseTracker();
  const show = promiseInProgress || showLoading;
  return (
    show && (
      <main>
        <h1>Stuff in progress...</h1>
        <p>{message}</p>
      </main>
    )
  );
}
