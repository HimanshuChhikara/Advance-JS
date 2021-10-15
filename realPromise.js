const urls = [ 'https://jsonplaceholder.typicode.com/posts',
                'https://jsonplaceholder.typicode.com/photos',
                'https://jsonplaceholder.typicode.com/users'
]

Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
})).then(results => {
    console.log(results);
}).catch(() => console.log("Error"))
