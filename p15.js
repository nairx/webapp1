function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { reject("Some error") }, 2000)
    })
}


async function main() {
    try {
        const res = await fetchData()
        console.log(res)
        console.log("Data fetched Successfully")
    }
    catch (error) {
        console.log(error)
    }
}

main()