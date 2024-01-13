const libraly = [
    {
        title : 'Red riding hood',
        author : 'Sarah Blakley',
        status : {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title : 'How to Avoid a Climate Disaster',
        author : 'Bill Gates',
        status : {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title : 'Bí quyết làm giàu',
        author : 'Duc Nguyen',
        status : {
            own: true,
            reading: false,
            read: false,
        }
    }
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;


const { title: firstBook } = library[0];

console.log(firstBook);

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);