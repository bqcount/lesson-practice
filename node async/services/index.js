const axios = require('axios')

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const apiArtists = axios.create({
    baseURL: 'http://localhost:3000'
})

async function getData() {
    try {
        const myObj = await api.get('/todos/1')
        console.log(Object.keys(myObj))
        console.log(myObj.data)
    } catch (error) {
        console.error(error)
    }
}
// getData()

const getPosts = async () => {
    try {
        const result = await api.get('/posts')
        console.log(result.data);

    } catch (err) {
        console.log(err)
    }
}
// ()

const getResource = (async (endpoint) => {
    try {
        const result = await api.get(`/${endpoint}`)
        console.log(result.data);

    } catch (err) {
        console.log(err)
    }
})

const postPosts = async () => {
    try {
        const syntax1 = await api({
            method: 'post',
            url: '/posts',
            data: {
                title: 'lorem 1',
                body: 'lorem ipsum 1'
            }
        });

        const syntax2 = await api.post('/posts', {
            title: 'lorem 2',
            body: 'lorem ipsum 2'
        })
        //console.log(syntax1.data);
        //console.log(syntax2.data);

    } catch (err) {
        console.log(err)
    }
}

/* api.get('/posts')
    .then((result) => {
        console.log(result.data)
    })
    .catch((err) => {
        console.log(err)
    })
*/
const getArtists = async () => {
    const result = await apiArtists.get(`/artists`)
    console.log(result.data);
}

const getSongs = async () => {
    const result = await apiArtists.get(`/songs`)
    console.log(result.data);
}

module.exports = {
    postPosts,
    getPosts,
    getResource,
    getArtists,
    getSongs
}