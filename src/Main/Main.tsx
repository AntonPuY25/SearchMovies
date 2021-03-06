import React, {useEffect, useState} from 'react';
import GetApi from "../Dall/apiServer";

const Main = () => {
    const [test, setTest] = useState<string>()
    useEffect(() => {
        async function Test() {
            const result = await GetApi.getMovies('war')
            console.log(result[0])
            setTest(JSON.stringify(result))
        }

        Test()
    }, [])
    return (
        <>
            {test}
        </>
    )
}
export default Main;