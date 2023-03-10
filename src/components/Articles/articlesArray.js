export const articlesArray = [
    {
        id: 1,
        title: 'Mercedes-Benz',
        category: 'Mercedes-Benz',
        categoryLink: 'mercedes',
        description: 'This is description of the car named Mercedes-Benz',
        fullDescription:
            'This is Mercedes-Benz and it is the best car in the world',
        image: '/images/mercedes.jpg',
    },
    {
        id: 2,
        title: 'Ferrari',
        category: 'Ferrari',
        categoryLink: 'ferrari',
        description: 'This is description of the car named Ferrari',
        image: '/images/ferrari.jpg',
    },
    {
        id: 3,
        title: 'Aston Martin',
        category: 'Aston Martin',
        categoryLink: 'aston-martin',
        description: 'This is description of the car named Aston Martin',
        image: '/images/astonmartin.jpg',
    },
    {
        id: 4,
        title: 'Ferrari',
        category: 'Ferrari',
        categoryLink: 'ferrari',
        description: 'This is description of the car named Ferrari',
        image: '/images/ferrari.jpg',
    },
    {
        id: 5,
        title: 'Aston Martin',
        category: 'Aston Martin',
        categoryLink: 'aston-martin',
        description: 'This is description of the car named Aston Martin',
        image: '/images/astonmartin.jpg',
    },
    {
        id: 6,
        title: 'Aston Martin',
        category: 'Aston Martin',
        categoryLink: 'aston-martin',
        description: 'This is description of the car named Aston Martin',
        image: '/images/astonmartin.jpg',
    },
    {
        id: 7,
        title: 'Mercedes-Benz',
        category: 'Mercedes-Benz',
        categoryLink: 'mercedes',
        description: 'This is description of the car named Mercedes-Benz',
        image: '/images/mercedes.jpg',
    },
    {
        id: 8,
        title: 'Aston Martin',
        category: 'Aston Martin',
        categoryLink: 'aston-martin',
        description: 'This is description of the car named Aston Martin',
        image: '/images/astonmartin.jpg',
    },
    {
        id: 9,
        title: 'Ferrari',
        category: 'Ferrari',
        categoryLink: 'ferrari',
        description: 'This is description of the car named Ferrari',
        image: '/images/ferrari.jpg',
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
