const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// CATEGORY - CREATE

const createTags = (tagsList) => {

    prisma.tag.createMany({
        data: tagsList.map(t => ({ name: t.name }))
    }).then(c => console.log('Tag created successfully!', c)).catch(err => console.error(err))

}

module.exports = {
    createTags
}