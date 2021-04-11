import { useEffect, useRef } from 'react'

import './BottomObserver.css'

function BottomObserver({ onIntersect }) {
    const bottomRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    onIntersect()
                }
            })
        }, { rootMargin: '0px', threshold: .5 })
        let divRef = bottomRef.current;
        if (divRef) observer.observe(divRef)
        return () => {
            if (divRef) observer.unobserve(divRef)
        };
    }, [onIntersect])

    return (
        <div className="observer" ref={bottomRef}></div>
    )
}

export default BottomObserver