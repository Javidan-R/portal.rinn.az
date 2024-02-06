// import { useEffect, useRef, RefObject } from "react";

// type OutsideClickHandler = () => void;

// export function useOutsideClick(
//   handler: OutsideClickHandler,
//   listenCapturing = true
// ): RefObject<HTMLDivElement> {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClick(e: MouseEvent) {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         handler();
//       }
//     }

//     document.addEventListener("click", handleClick, listenCapturing);

//     return () =>
//       document.removeEventListener("click", handleClick, listenCapturing);
//   }, [handler, listenCapturing]);

//   return ref;
// }
