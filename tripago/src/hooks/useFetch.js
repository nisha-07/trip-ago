import { useState, useEffect } from "react"

/**
 * @param {*} url 
 * @returns data
 */

const useFetch = (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    /**
     * We don't need to use useCallback function over here because 
     * we don't have to pass the function as a dependency array
     * */

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)

            try {
                const response = await fetch(url)

                if (!response.ok) throw new Error(response.statusText)
                const json = await response.json()
                console.log(response)
                setIsLoading(false)
                setData(json)
                setError(null)
            }
            catch (err) {
                if (err.name === "AbortError") {
                    console.log("the fetch was aborted")
                } else {
                    setIsLoading(false)
                    setError('Could not fetch the data')
                }
            }
        }
        fetchData()
    }, [url])

    return { data, isLoading, error }
}
export default useFetch

/**
 * if the url is not proper,it will give the response and won't throw an error
 * so we can throw it using value of response.ok
 * ok --> false
 * statusText --> Not found
 */