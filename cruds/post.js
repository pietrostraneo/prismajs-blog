const { PrismaClient } = require('@prisma/client');
const slugify = require('slugify');

const prisma = new PrismaClient()

// POST - CREATE
const createPost = (data) => {


    prisma.post.create({ data }).then(p => console.log('Post created successfully', p)).catch(err => console.error(err))

}

// POST - READ UNIQUE
const readUniquePost = (postTitle) => {

    prisma.post.findUnique({
        where: {
            slug: slugify(postTitle)
        },
        include: {
            category: {
                select: {
                    name: true
                }
            },
            tags: {
                select: {
                    name: true
                }
            }
        }
    }).then(p => console.log('Here\'s the post you are looking for:', p)).catch(err => console.error(err))

}

// POST- READ ALL

const readAllPost = () => {

    prisma.post.findMany({
        include: {
            category: {
                select: {
                    name: true
                }
            },
            tags: {
                select: {
                    name: true
                }
            }
        }
    }).then(p => console.log('Here\'s all the posts in ur blog:', p)).catch(err => console.error(err))

}

// POST - UPDATE

const updatePost = (postId, data) => {

    prisma.post.update({
        where: {
            id: postId
        },
        data
    }).then(p => console.log('Post updated successfully', p)).catch(err => console.error(err))
}

// POST - DELETE

const deletePost = (postId) => {

    prisma.post.delete({
        where: {
            id: postId
        }
    }).then(p => console.log('Post deleted successfully', p)).catch(err => console.error(err))

}

module.exports = {
    createPost,
    readUniquePost,
    readAllPost,
    updatePost,
    deletePost
}

