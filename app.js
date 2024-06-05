const post = require('./cruds/post.js');
const category = require('./cruds/category.js');
const tag = require('./cruds/tag.js');

const slugify = require('slugify');

// const categoryList = [
//     {
//         name: 'News'
//     },
//     {
//         name: 'Javascript'
//     },
//     {
//         name: 'PHP'
//     },
//     {
//         name: 'NodeJs'
//     }
// ];

// category.createCategory(categoryList)

// const tagsList = [
//     {
//         name: 'frontend'
//     },
//     {
//         name: 'backend'
//     },
//     {
//         name: 'database'
//     },
//     {
//         name: 'server'
//     }
// ]

// tag.createTags(tagsList);

// const newPost = {
//     title: 'This excercise was really easy',
//     slug: slugify('This excercise was really easy'),
//     content: 'prisma orm is amazing!',
//     published: true,
//     categoryId: 1,
//     tags: {
//         connect: [
//             { id: 2 },
//             { id: 4 }
//         ]
//     }
// }

// post.createPost(newPost);

// post.readAllPost();
// post.readUniquePost('NodeJs Tutorial'); -- CONVERTE IL TITOLO IN SLUG ED EFFETTUA LA RICERCA DEL POST

post.readByString('tutorial');
post.publishedPost();

