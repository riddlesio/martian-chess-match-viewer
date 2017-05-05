import React        from 'react';
import component    from 'omniscient';
import _            from 'lodash';
import FieldView    from './FieldView.jsx';
import PlayerView   from './PlayerView.jsx';
import Overlay      from './Overlay.jsx';

const GameView = component('GameView', function (props) {

    const { state, settings } = props;
    const { winner, illegalMove, player, players, round } = state;
    const playerSettings      = settings.players;
    const colors              = settings.colors.players;
    const illegalMoveClass    = player === 0 || player === 1 ? ` GoGame-player${player}Color` : '';

    players.map((p, index) => {
        p.name = playerSettings.names[index];
        p.activePlayer = player;
        p.id = index;
        p.color = colors[p.id];
        p.key = 'playerview-' + p.id;

        return p;
    });

    return (
        <svg className="GoGame" viewBox="0 0 1200 705" preserveAspectRatio="xMidYMid meet">
            <defs>
                <image
                    id="image"
                    width="15"
                    height="633"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAJ5CAYAAABxMmq/AAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVR4Xu3QPU/CUBiGYWyrRPAjDEAImujA5GZi6i8gcSNMJBBWJ0YSjZOD+rPrU/sccyAtibP3cOcNL+c6adsqiqJ1oKND/zeBsiQq7BpxOJCqTJ1EZd7vXLKPUx/uqAt16dnxPlywgwNsq3M1UNfqxnPgfTu+IODyvY5VVw3VRN2r3HPifdfnkoDDxylv7alboyc188y97/ncz0eMH/lU9dWdmqq1evacet/3uTTG5dcsH2lUVI85Vxv14jn3fuRzWR0eqwe1UFv17rnwftyEz9RVUb3fUr2qD8+l91c+14gf1Uq9qU/Plfd/wl9gMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg/83/vwrztVSvaoPz6X3jbirxupBLdRWvXsuvB/7XC0eqXs1Vxv14jn3flSHU3Wq+upOTdVaPXtOve/7XBrjRLVVT90W1fs9qZln7n3P55KAW/5xXFSPNFSTonrM3HPifdfnyvOtgMOjl7eeq4G6VjeeA+/bPncU4/iCE9VRF+rSs+P9L6zD4YLMh0NZBGvx/iVJ1A46hPcvavz/G+oMITkiQBy9AAAAAElFTkSuQmCC"
                />
                <image
                    id="image-2"
                    width="633"
                    height="15"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnkAAAAPCAYAAACY7dlUAAAACXBIWXMAAAsSAAALEgHS3X78AAABlklEQVR4Xu3dO2sUURzG4Y1Rg3dSJCIqmCKVlYKXTxBIl1SBKNY2loKXykL82Jv3xR3ZNRvINtkJPMXTDHP6H/85Z85kOp1OLrABAMDoLW25i+Luxsxm3AQAYHTaaUOznYu9ZZO7LrgVW3En7s3cBwBg7YY2a6e119pt7beFyd7/kbc5e7kLt2MnnsTTmWcAAKzN0GTts3Zae63d1n4bQm8h8obAux0P4nHsxct4FW/iXbwHAGBt2mPtsvZZO6291m5rv7Xj/oXefOT12+7d2I39eBsHcRwncRof4iMAAFeuHdYea5e1z9pp7bV2W/utHdeeW4i8bthr/T2M5/E6DuNTfImv8T1+xE8AAK5cO6w91i5rn7XT2mvttvZbO649166bzJ+m7cNH8WL6dxR4FJ/jW/yK3/EHAIC1aY+1y9pn7bT2Wrut/daOGyJvwyQPAOB6WHmSZ08eAMD4tcNW3pPndC0AwPitfLrWf/IAAMZvaLJL/yfPjRcAANfDyjdezMeeu2sBAMbt0nfXLos9AADGbWnLnQGuiiEdHqtogwAAAABJRU5ErkJggg=="
                />
                <symbol id="GoGame-board" viewBox="0 0 672 672">
                    <g className="Board-1">
                        <polygon
                            className="Board-2"
                            points="12.42 672.02 672 672.02 672 12.03 660.01 0 0 0.02 0 660.52 12.42 672.02"
                        />
                        <polygon
                            className="Board-3"
                            points="0 660.52 660 660 660 0 0 0 0 660.52"
                        />
                        <polygon
                            className="Board-8"
                            points="0 660.38 12.42 672.02 672 671.36 660 659.29 0 660.38"
                        />
                    </g>
                </symbol>
                <symbol id="GoGame-cell-pieceQ" viewBox="0 0 37 37">
                    <g>
                        <circle fill="#ff5552" cx="17.42" cy="15.5" r="14.5"/>
                    </g>
                </symbol>
				<symbol id="GoGame-cell-pieceD" viewBox="0 0 37 37">
					<g>

						<polygon
                            fill="#ff5552"
                            points="5 18.5 18.5 5 32 18.5 18.5 32 5 18.5"
                        />
					</g>
				</symbol>
				<symbol id="GoGame-cell-pieceP" viewBox="0 0 37 37">
					<g>
						<polygon
                            fill="#ff5552"
                            points="10 27 18.5 10 27 27 10 27"
                        />
					</g>
                </symbol>
                <symbol id="GoGame-cell-pieceq" viewBox="0 0 37 37">
                    <g>
                        <circle fill="#6aa2fe" cx="17.42" cy="15.5" r="12.5"/>
                    </g>
                </symbol>
				<symbol id="GoGame-cell-pieced" viewBox="0 0 37 37">
					<g>
						<polygon
                            fill="#6aa2fe"
                            points="5 18.5 18.5 5 32 18.5 18.5 32 5 18.5"
                        />
					</g>
				</symbol>
				<symbol id="GoGame-cell-piecep" viewBox="0 0 37 37">
					<g>
						<polygon
                            fill="#6aa2fe"
                            points="10 27 18.5 10 27 27 10 27"
                        />
					</g>
                </symbol>
				<symbol id="GoGame-background-white" viewBox="0 0 37 37">
					<g>
						<rect fill="#eeeeee" x="0" y="0" width="37" height="37"/>
					</g>
                </symbol>
				<symbol id="GoGame-background-black" viewBox="0 0 37 37">
					<g>
						<rect fill="#111111" x="0" y="0" width="37" height="37"/>
					</g>
                </symbol>
                <symbol id="GoGame-avatar0" dangerouslySetInnerHTML={{
                    __html: `
                    <image width="120" height="120" clip-path="url(#roundedclip)"
                        xlink:href="http://gravatar.com/avatar/${playerSettings.emailHash[0]}?s=100&amp;d=mm" />
                    <rect width="120" height="120" rx="10" x="1" y="1"
                        style="stroke:${colors[0]};stroke-width:4;fill-opacity:0;stroke-opacity:1" />
                    `
                }} />
                <symbol id="GoGame-avatar1" dangerouslySetInnerHTML={{
                    __html: `
                    <image width="120" height="120" clip-path="url(#roundedclip)"
                        xlink:href="http://gravatar.com/avatar/${ playerSettings.emailHash[1] }?s=100&amp;d=mm" />
                    <rect width="120" height="120" rx="10" x="1" y="1"
                        style="stroke:${colors[1]};stroke-width:4;fill-opacity:0;stroke-opacity:1" />
                    `
                }} />
                <clipPath id="roundedclip">
                    <rect x="0" y="0" width="120" height="120" rx="10"/>
                </clipPath>
            </defs>
            <text x="15" y="30" className="GoGame-round">{ 'Round ' + round }</text>
            { _.map(players, PlayerView) }
            { FieldView(state) }
            <text x="50%" y="35" className={ 'GoGame-illegalMove' + illegalMoveClass }>
                { illegalMove }
            </text>
            <Overlay winner={ winner } />
        </svg>
    );
});

export default GameView;
