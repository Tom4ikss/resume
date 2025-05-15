import { useEffect, useRef } from "react";


export default function useScrollAndSelection() {

    const scrollToRef = useRef(null)
    const timeoutRef = useRef(null)

    useEffect(() => () => clearTimeout(timeoutRef.current), [])

    const scrollToAndSelect = () => {
        if (scrollToRef.current) {
            scrollToRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
        });

        timeoutRef.current = setTimeout(() => {
            try {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(scrollToRef.current);
                selection.removeAllRanges();
                selection.addRange(range);
            } catch (e) {
                console.error(`Element was not selected: ${e}`)
            }
        }, 500);
      }
    }


    return {ref: scrollToRef, scrollToAndSelect}
}