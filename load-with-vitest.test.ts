import {test} from 'vitest';
import {adjectives, uniqueNamesGenerator} from 'unique-names-generator';

test('can load and call the library', ({expect}) => {

    const name = uniqueNamesGenerator({
        dictionaries: [adjectives],
        separator: '-',
    });
});