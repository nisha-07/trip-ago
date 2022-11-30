import { useState, useEffect } from "react"

/**
 * @param {*} url 
 * @returns data
 */

const useFetch = (url) => {
    const [data, setData] = useState()

    /**
     * We don't need to use useCallback function over here because 
     * we don't have to pass the function as a dependency array
     * */

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
            setData(json)
        }
        fetchData()
    }, [url])

    return { data }
}
export default useFetch