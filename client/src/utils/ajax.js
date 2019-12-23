
async function postData(url='', data={}, method = 'POST') {
    try {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url, true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
}

export default postData