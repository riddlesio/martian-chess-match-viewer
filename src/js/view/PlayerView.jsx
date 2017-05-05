import React       from 'react';
import createView  from 'omniscient';

const PlayerView = createView('PlayerView', function (props) {

    const { activePlayer, score, stones, id, name } = props;
    const activeClass = activePlayer === id ? " active" : "";
    const posX = id === 0 ? 70 : 1010;

    let { stonestaken } = props;

    stonestaken = "x " + stonestaken;

    return (
        <g>
            <use x={ posX } y="60" xlinkHref={ `#GoGame-avatar${id}` } />
            <text
                x={ posX + 63 }
                y="210"
                className={ `GoGame-playerName GoGame-player${id}Color${activeClass}` }
            >
                { name }
            </text>

            <rect
                x={ posX - 18 }
                y="260"
                width="160"
                height="150"
                rx="10"
                className={ `GoGame-panel GoGame-player${id}Color GoGame-player${id}StrokeColor` }
            />
            <text
                x={ posX + 60 }
                y="325"
                className={ `GoGame-playerScoreBig GoGame-player${id}Color` }
            >
                { score }
            </text>
            <text
                x={ posX + 60 }
                y="350"
                className={ `GoGame-playerLabel GoGame-player${id}Color` }
            >
                Total score
            </text>
        </g>
    );
});

export default PlayerView;
