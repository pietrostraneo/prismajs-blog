const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// CATEGORY - CREATE

const createCategory = (categoriesList) => {

    prisma.category.createMany({
        data: categoriesList.map(c => ({ name: c.name }))
    }).then(c => console.log('Category created successfully!', c)).catch(err => console.error(err))

}

module.exports = {
    createCategory
}