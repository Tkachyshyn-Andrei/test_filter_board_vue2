import {faker} from '@faker-js/faker';

function randomBetween(min = 1, max = 100) {
    return Math.floor(Math.random() * max) + min;
}

export function makeCard() {
    return {
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        status: randomBetween(1, 3),
        description: faker.lorem.text(),
        rate: randomBetween(10, 90),
        country: faker.random.arrayElement(['ua', 'en', 'pl']),
    };
}

export default (count) => {
    const cards = [];

    for (let i = 0; i < count; i++) {
        const card = makeCard();
        cards.push(card);
    }
    return cards;
}

