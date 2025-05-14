import { useState, useEffect } from "react"

function CopySnackbarComponent({elementRef, text}) {
    {

    const [snackbarVisibility, setSnackbarVisibility] = useState(false)
    const [copied, setCopied] = useState(false)

    function showSnackBar() {
        setSnackbarVisibility(true)
        setCopied(true)
        setTimeout(() => {
            setSnackbarVisibility(false)
            setCopied(false)
        }, 2000)
    }

    function Copy(text) {
        if(copied) return
        navigator.clipboard.writeText(text).then(showSnackBar())
    } 
    useEffect(() => {
        const node = elementRef.current;
        if (node) {
        node.addEventListener('click', () => {Copy(text)});
        }

        return () => {
        if (node) {
            node.removeEventListener('click', () => {Copy(text)});
        }
        };
  }, []);


    return (<span className={["p-1 rounded-sm bg-gray-800 text-xs text-blue-100 ml-2", snackbarVisibility ? "visible" : "invisible"].join(' ')}>Copied</span>)
}
}

export default CopySnackbarComponent