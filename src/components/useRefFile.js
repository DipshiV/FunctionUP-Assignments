import { Fragment,  useRef } from 'react';
import './useRefFile.css'
export default function PickFile() {
    const inputRef = useRef(null)
    function useRefPick() {
        inputRef.current.click();
    }
    return (
        <Fragment>
            <input type='file'
                ref={inputRef} />
            <button onClick={useRefPick} >Pick the file</button>
        </Fragment>
    )
}