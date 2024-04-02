const CompareCookies = ({ aValue, bValue }: { aValue: string, bValue: string }) => {
    let aCookies = []
    let bCookies = []

    try {
        aCookies = JSON.parse(aValue);
        bCookies = JSON.parse(bValue);
    } catch (e) {
        console.log(e)
    }

    type Cookie = {
        name: string,
        value: string
    }


    const isCookieEqual = (a: Cookie, b: Cookie) => a.name === b.name;
    const isCookieEqualValue = (a: Cookie, b: Cookie) => a.name === b.name && a.value === b.value;


    const onlyInLeft = (left: Cookie[], right: Cookie[], compareFunction: (a: Cookie, b: Cookie) => boolean) =>
        left.filter(leftValue =>
            !right.some(rightValue =>
                compareFunction(leftValue, rightValue)));

    const onlyInA = onlyInLeft(aCookies, bCookies, isCookieEqual);
    const onlyInB = onlyInLeft(bCookies, aCookies, isCookieEqual);

    const commonCookie = aCookies.filter((aCookie: Cookie) =>
        bCookies.some((bCookie: Cookie) =>
            isCookieEqualValue(aCookie, bCookie)));

    const commonCookieWithDifferentValues = aCookies.filter((aCookie: Cookie) =>
        bCookies.some((bCookie: Cookie) =>
            aCookie.name === bCookie.name && aCookie.value !== bCookie.value));

    return (
        <>
            <div className="flex flex-row mt-8">
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold text-center">A Bucket</h1>
                    {aCookies.map((cookie: Cookie) =>
                        <div className='border-2' key={cookie.name}>
                            <div className="px-2 "> {cookie.name} </div>
                            <div className="px-2 break-words"> {cookie.value} </div>
                        </div>
                    )}
                </div>
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold text-center">B Bucket</h1>
                    {bCookies.map((cookie: Cookie) =>
                        <div className='border-2' key={cookie.name}>
                            <div className="px-2 "> {cookie.name} </div>
                            <div className="px-2 break-words"> {cookie.value} </div>
                        </div>
                    )}
                </div>
            </div >
            <div className="mt-16 flex flex-row justify-center">
                <div className="w-3/4">
                    <h1 className="text-2xl font-bold text-center">Common Cookies</h1>
                    {commonCookie.map((cookie: Cookie) =>
                        <div className='border-2' key={cookie.name}>
                            <div className="px-2 "> {cookie.name} </div>
                            <div className="px-2 break-words"> {cookie.value} </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-16 flex flex-row justify-center">
                <div className="w-3/4">
                    <h1 className="text-2xl font-bold text-center">Common Cookies with different values</h1>
                    {commonCookieWithDifferentValues.map((cookie: Cookie) =>
                        <div className='border-2' key={cookie.name}>
                            <div className="px-2 "> {cookie.name} </div>
                            <div className="px-2 break-words"> A Bucket : {cookie.value} </div>
                            <div className="px-2 break-words"> B Bucket :  {bCookies.find((bCookie: Cookie) => bCookie.name === cookie.name).value} </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-16 flex flex-row">
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold text-center">Only in A Bucket</h1>
                    {onlyInA.map((cookie: Cookie) =>
                        <div className='border-2' key={cookie.name}>
                            <div className="px-2 "> {cookie.name} </div>
                            <div className="px-2 break-words"> {cookie.value} </div>
                        </div>
                    )}
                </div>
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold text-center">Only in B Bucket</h1>
                    {onlyInB.map((cookie: Cookie) =>
                        <div className='border-2' key={cookie.name}>
                            <div className="px-2 "> {cookie.name} </div>
                            <div className="px-2 break-words"> {cookie.value} </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )


}

export default CompareCookies