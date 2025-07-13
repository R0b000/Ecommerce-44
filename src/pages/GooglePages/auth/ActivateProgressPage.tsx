// import { useState } from "react"

import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router"

const ActivateProgressData = () => {
    // const [data, setData] = useState<string>('asedfasd')
    const params = useParams();

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        console.log("I am always execute even if any of the state on this components changes")
    })

    useEffect(() => {
        console.log("For the first time when the componet is mounted")
        setTimeout(() => {
            setQuery({
                'activate': "New value from here"
            })
        }, 3000)
    }, [])

    useEffect(() => {
        console.log("When the query is changed, this hook is triggered.")
    }, [query, params])

    console.log(params)
    return <>
        {params.token}
        {"query: " + query.get("activate")}
    </>
}

export default ActivateProgressData