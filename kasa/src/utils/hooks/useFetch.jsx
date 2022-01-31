

import { useState, useEffect } from "react"

/**
 * useFetch hook
 * @param { string } url 
 * @returns data from json file
 */

export function useFetch(url) {
console.log(url)
    const [data, setData] = useState([])  

    useEffect(() => {

        if (!url) return

        const getData = () => {
            fetch(url,
            { headers : 
                {
                    'Content-type': 'application/json',
                    'Accept' : 'application/json'
                }
            })
            .then(function(response) {
                if (response.ok) {
                    response.json().then( function(myJson) {
                        //console.log(myJson)
                        console.log('working')
                        setData(myJson)
                    })
                } else {
                    console.log(response.status)
                    console.log('notworking')
                    const errorMsg = `${response.status} : ${response.statusText}`
                    return <div className='error'>{errorMsg}</div>
                }
            })
        }
        getData()
    }, [url])

    return { data }
}