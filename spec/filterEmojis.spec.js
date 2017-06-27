const { expect } = require('chai');
const filterEmojis = require('../src/helper_functions/filterEmojis');

const emojis = [
    {
        title: 'Smile'
    },
    {
        title: 'Laughing'
    },
    {
        title: 'Grin'
    },
    {
        title: 'Grinning'
    },
    {
        title: 'Blush'
    }

]

describe('searchBox', () => {
    it('should be a function', () => {
        expect(filterEmojis).to.be.a('function');
    });
    it('should take 2 properties', () => {
        expect(filterEmojis.length).to.equal(2);
    });
    it('should correctly filter emojis', () => {
        const result = filterEmojis('grin', emojis);
        const expected = [
            { title: 'Grin' },
            { title: 'Grinning' }
        ];
        expect(result).to.eql(expected);
    });
    // it('should correctly filter emojis', () => {
    //     expect(searchBox('Grin', arr)).to.eql([{title: 'Grin'},{title: 'Grinning'}]);
    //     //expect(searchBox('ing', arr)).to.eql([{title: 'Grin'},{title: 'Grinning'},{title: 'Laughing'}]);
    // });
})