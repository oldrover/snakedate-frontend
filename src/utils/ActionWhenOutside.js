import { useRef, useEffect } from 'react';

export const ActionWhenOutside = (props) => {
    const wrapperRef = useRef(null);
    const action = props.action;

    const fireAction = () => {
        action();
    };

    const DetectOutsideEvent = (ref) => {
        useEffect(() => {
    
            const handleOutsideClick = (event) => {
                if(ref.current && !ref.current.contains(event.target)) {
                    fireAction();
                }
            }
    
            document.addEventListener('mousedown', handleOutsideClick);
            return () => {
                document.removeEventListener('mousedown', handleOutsideClick);
            }
        }, [ref])
    };
    
    DetectOutsideEvent(wrapperRef);

    return <div ref={wrapperRef}>{props.children}</div>;
}