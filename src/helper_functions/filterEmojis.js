const arr = [
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

function filterEmojis(str, emojis) {
    // will need to refactor with regex eventually
    str = str.toLowerCase();
    return emojis.filter((emoji) => {
        return emoji.title.toLowerCase().includes(str) || emoji.keywords.toLowerCase().includes(str);
    });

}

module.exports = filterEmojis;

