const { PromptDialog } = require('botfuel-dialog');

class Travel extends PromptDialog {}

Travel.params = {
    name: 'travel',
    entities: {
        destination: {
            dim: 'city',
        },
    },
};

module.exports = Travel;