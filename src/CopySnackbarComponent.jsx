import { useState } from "react"

function CopySnackbarComponent({ text, children }) {
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

    return (
    <div className="relative flex max-w-fit" onClick={() => Copy(text ?? children.props.children)}>
        { children }     
        {snackbarVisibility && <span className="animate-fade-slide-up select-none p-1 rounded-sm bg-gray-800 text-xs text-blue-100 ml-2">Copied</span>}
    </div>
    )
}
}

export default CopySnackbarComponent