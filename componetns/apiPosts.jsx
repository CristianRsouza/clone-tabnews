const generateId = (() => {
    let currentId = 1;
    return () => currentId++;
})();

const apiPost = [{
        id: generateId(),
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit sollicitudin urna molestie mattis.    ',
        tabcoins: 2,
        comentarios: 15
    },
    {
        id: generateId(),
        title: 'Lorem ipsum dolor sit amet, consectetur.',
        tabcoins: 0,
        comentarios: 2
    },
    {
        id: generateId(),
        title: 'Lorem ipsum dolor sit amet',
        tabcoins: 19,
        comentarios: 1
    },
    {
        id: generateId(),
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit sollicitudin urna molestie mattis.    ',
        tabcoins: 5,
        comentarios: 25
    },
    {
        id: generateId(),
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit sollicitudin urna molestie mattis.    ',
        tabcoins: 10,
        comentarios: 2
   
    },
    {
        id: generateId(),
        title: 'Lorem ipsum dolor sit amet, consectetur.',
        tabcoins: 12,
        comentarios: 5
    },
    {
        id: generateId(),
        title: 'Lorem ipsum dolor sit amet',
        tabcoins: 50,
        comentarios: 19
    },
    {
        id: generateId(),
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit sollicitudin urna molestie mattis.    ',
        tabcoins: 2,
        comentarios: 15
    },

];

export {
    apiPost
}