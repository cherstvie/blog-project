export const articlesArray = [
    {
        id: 1,
        title: 'Mercedes-Benz',
        category: 'Mercedes',
        description: 'This is description of the car named Mercedes-Benz',
        image: '/images/mercedes.jpg',
    },
    {
        id: 2,
        title: 'Ferrari',
        category: 'Ferrari',
        description: 'This is description of the car named Ferrari',
        image: '/images/ferrari.jpg',
    },
    {
        id: 3,
        title: 'Aston Martin',
        category: 'Aston Martin',
        description: 'This is description of the car named Aston Martin',
        image: '/images/astonmartin.jpg',
    },
    {
        id: 4,
        title: 'Aston Martin',
        category: 'Aston Martin',
        description: 'This is description of the car named Aston Martin',
        image: '/images/astonmartin.jpg',
    },
    {
        id: 5,
        title: 'Aston Martin',
        category: 'Aston Martin',
        description: 'This is description of the car named Aston Martin',
        image: '/images/astonmartin.jpg',
    },
    {
        id: 6,
        title: 'Aston Martin',
        category: 'Aston Martin',
        description: 'This is description of the car named Aston Martin',
        image: '/images/astonmartin.jpg',
    },
]

export const getArticlesObject = (array) => {
    return array.reduce(
        (obj, article) => ({
            ...obj,
            [article.id]: article,
        }),
        {}
    )
}
