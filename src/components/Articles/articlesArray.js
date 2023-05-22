export const articlesArray = [
    {
        id: 1,
        title: 'Mont Saint Michel',
        category: 'France',
        categoryLink: 'france',
        description:
            'The Mont-Saint-Michel is one of Europe’s most unforgettable sights. Set in a mesmerising bay shared by Normandy and Brittany, the mount draws the eye from a great distance.',
        fullDescription:
            'This is Mercedes-Benz and it is the best car in the world',
        image: '/images/france1.jpg',
    },
    {
        id: 2,
        title: 'Étretat',
        category: 'France',
        categoryLink: 'france',
        description:
            "Étretat is a town on the north coast of France. It’s known for the striking rock formations carved out of its white cliffs, including the Porte d'Aval arch and L'Aiguille (the Needle), a pillar rising up from the sea. To the north, the cliffside Chapelle Notre-Dame de la Garde has dramatic views",
        image: '/images/france2.jpg',
    },
    {
        id: 3,
        title: 'Sardinia',
        category: 'Italy',
        categoryLink: 'italy',
        description:
            'Sardinia is a large Italian island in the Mediterranean Sea. It has nearly 2,000km of coastline, sandy beaches and a mountainous interior crossed with hiking trails',
        image: '/images/italy1.jpg',
    },
    {
        id: 4,
        title: 'Corsica',
        category: 'France',
        categoryLink: 'france',
        description:
            'Corsica, a mountainous Mediterranean island, presents a mix of stylish coastal towns, dense forest and craggy peaks (Monte Cinto is the highest)',
        image: '/images/france3.jpg',
    },
    {
        id: 5,
        title: 'Pena Palace',
        category: 'Portugal',
        categoryLink: 'portugal',
        description:
            'The castle stands on the top of a hill in the Sintra Mountains above the town of Sintra, and on a clear day it can be easily seen from Lisbon and much of its metropolitan area.',
        image: '/images/portugal1.jpg',
    },
    {
        id: 6,
        title: 'Madeira',
        category: 'Portugal',
        categoryLink: 'portugal',
        description:
            'Madeira, an autonomous region of Portugal, is an archipelago comprising 4 islands off the northwest coast of Africa. It is known for its namesake wine and warm, subtropical climate.',
        image: '/images/portugal2.jpg',
    },
    {
        id: 7,
        title: 'Azores',
        category: 'Portugal',
        categoryLink: 'portugal',
        description:
            'The Azores, an autonomous region of Portugal, are an archipelago in the mid-Atlantic. The islands are characterized by dramatic landscapes, fishing villages, green pastures and hedgerows of blue hydrangeas.',
        image: '/images/portugal3.jpg',
    },
    {
        id: 8,
        title: 'Mallorca',
        category: 'Spain',
        categoryLink: 'spain',
        description:
            "Mallorca (Majorca) is one of Spain's Balearic Islands in the Mediterranean. It's known for beach resorts, sheltered coves, limestone mountains and Roman and Moorish remains.",
        image: '/images/spain1.jpg',
    },
    {
        id: 9,
        title: 'Sagrada Familia',
        category: 'Spain',
        categoryLink: 'spain',
        description:
            'The Sagrada Familia church is considered to be the best example of Modernist architecture designed by the legendary architect Antoni Gaudí.',
        image: '/images/spain2.jpg',
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
