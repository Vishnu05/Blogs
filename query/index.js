
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

/** Post data example */
/* posts === {
    'sdfsfs2': {
        id: 'sdfsfs2',
        title: 'title of the blog',
        comments: [{
            id: 'dfs23',
            content: 'nice'
        }, {
            id: 'bini64',
            content: 'nice blog!'
        }]
    }
} */



app.get('/posts', (req, res) => {

    res.send(posts)

})

app.post('/events', (req, res) => {

    const { type, data } = req.body

    if (type === 'PostCreated') {
        const { id, title } = data

        posts[id] = { id, title, comments: [] }
    }

    if (type === 'CommentCreated') {

        const { id, content, postId } = data

        const post = posts[postId]
        post.comments.push({ id, content })

    }

    console.log(posts)
    console.log('hi')

    res.send({})
})



app.listen(4002, () => {
    console.log('Listening on port : 4002 .')
})