import { useState, useEffect } from "react"

// Hook https://usehooks.com/useOnScreen/

export default (ref, threshold = 0.25) => {
  // State and setter for storing whether element is visible

  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires

        setIntersecting(entry.isIntersecting)
      },

      {
        threshold,
      }
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.unobserve(element)
    }
  }, [ref, threshold]) // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting
}

// export default (ref, threshold = 0.25) => {
//   const [isIntersecting, setIntersecting] = useState(false)

//   useEffect(() => {
//     const element = ref.current
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIntersecting(true)
//           observer.unobserve(entry.target)
//         }
//       },
//       {
//         threshold,
//       }
//     )
//     if (element) {
//       setTimeout(() => observer.observe(element), 3500)
//     }
//     return () => {
//       observer.unobserve(element)
//     }
//   }, [ref, threshold])
//   return isIntersecting
// }
