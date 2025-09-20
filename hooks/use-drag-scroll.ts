import { useEffect, useRef } from 'react'

/**
 * Custom hook to enable drag scrolling on an element.
 *
 * _Details_: \
 * When mouse is down, saves the initial state (scroll and mouse position). \
 * When mouse is moved, calculates the new state and updates it. \
 * When mouse is up or leaves the element, stops the scrolling.
 *
 * @param scrollSpeed - The speed at which to scroll the element.
 * @returns A ref to be attached to the element to enable drag scrolling.
 */
export function useDragScroll<T extends HTMLElement | null>(
  scrollSpeed: number = 1
) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let isDown = false
    let startPosition: number, startScroll: number
    let newPosition: number, newScroll: number

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true
      startPosition = e.pageX
      startScroll = el.scrollLeft
    }

    const handleMouseLeave = (e: MouseEvent) => {
      isDown = false
    }

    const handleMouseUp = () => {
      isDown = false
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return

      e.preventDefault()
      newPosition = e.pageX

      const stride = (newPosition - startPosition) * scrollSpeed
      newScroll = startScroll - stride

      el.scrollLeft = newScroll
    }

    el.addEventListener('mousedown', handleMouseDown)
    el.addEventListener('mouseleave', handleMouseLeave)
    el.addEventListener('mouseup', handleMouseUp)
    el.addEventListener('mousemove', handleMouseMove)

    return () => {
      el.removeEventListener('mousedown', handleMouseDown)
      el.removeEventListener('mouseleave', handleMouseLeave)
      el.removeEventListener('mouseup', handleMouseUp)
      el.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return ref
}
