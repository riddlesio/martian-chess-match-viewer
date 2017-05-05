const _ = require('lodash');

function parsePlayerNames(playerData, settings) {

    settings.players.names = [];
    settings.players.emailHash = [];

    playerData.forEach((player) => {
        const name = player.name ? player.name : '';
        const hash = player.emailHash ? player.emailHash : '';

        settings.players.names.push(name);
        settings.players.emailHash.push(hash);
    });

    return settings;
}

function parseStates(data, settings) {

    const { field, players }        = settings;
    const { width, height }         = field.cell;
    const { margintop, marginleft } = field.margins;
    const { winner }                = data;

    const states = data.states.map(state => {

        const { round, column, field, illegalMove, player, players } = state;

        return {
            round,
            column,
            illegalMove,
            player,
            players,
            winner: null,
            cells: _.chain(field)
                .thru((string) => string.split(/,|;/))
                .map((cellType, index) => {
                    const piece  = cellType;
                    const row     = Math.floor(index / 4);
                    const column  = index % 4;
                    const x       = column * width + marginleft;
                    const y       = row * height + margintop;
                    const key     = row + '-' + column;
                    var i = (index+row) % 2;
                    const background = i == 0 ? "black" : "white";
                    return { key, row, column, x, y, width, height, piece, background };
                }).value(),
        };
    });

    return addFinalState(states, winner, players.names);
}

function addFinalState(states, winner, playerNames) {
    const lastState = states[states.length - 1];
    return states.concat([{
        ...lastState,
        winner: winner !== null ? playerNames[winner] : null,
    }]);
}

export {
    parsePlayerNames,
    parseStates,
};
