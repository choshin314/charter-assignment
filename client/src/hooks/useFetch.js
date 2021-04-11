import { useState } from "react";

import { ajaxGet } from "../util";

export default function useFetch() {
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const fetchData = async (url, onSuccess) => {
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
    }

    return { loading, error, fetchData }
}