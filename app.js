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
//     title: 'NodeJs Tutorial',
//     slug: slugify('NodeJs Tutorial'),
//     content: 'This is a tutorial on NodeJs',
//     published: true,
//     categoryId: 2,
//     tags: {
//         connect: [
//             { id: 1 },
//             { id: 2 }
//         ]
//     }
// }

// post.createPost(newPost);

// post.readAllPost();
// post.readUniquePost('NodeJs Tutorial'); -- CONVERTE IL TITOLO IN SLUG ED EFFETTUA LA RICERCA DEL POST

