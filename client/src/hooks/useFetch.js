import { useState, useCallback } from "react";

import { ajaxGet } from "../util";

export default function useFetch() {
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const fetchData = useCallback(async (url, onSuccess) => {
        setLoading(true)
        ajaxGet(url)
            .then(res => {
                if (res.error) {
                    setError(res.error)
                } else {
                    onSuccess(res.data)
                }
                setLoading(false)
            })
    }, [setLoading, setError])

    return { loading, error, fetchData }
}