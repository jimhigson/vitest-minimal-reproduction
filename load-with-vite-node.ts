import {test} from 'vitest';
import {adjectives, uniqueNamesGenerator} from 'unique-names-generator';

uniqueNamesGenerator({
    dictionaries: [adjectives],
    separator: '-',
});

 