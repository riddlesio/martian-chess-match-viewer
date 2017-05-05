import React      from 'react';
import createView from 'omniscient';

const Cell = createView(function (data) {

    const { row, column, x, y, width, height, piece, background } = data;
    const className = `piece${piece}`;
    const key       = `row${row}col${column}`;

    return (
        <g key={ key } className="GoGame-cell" >
            <use
                x={ x }
                y={ y-5 }
                width={ width }
                height={ height }
                xlinkHref={ `#GoGame-background-${background}` }
            />
            <use
                x={ x }
                y={ y }
                width={ width }
                height={ height }
                xlinkHref={ `#GoGame-cell-${className}` }
            />
        </g>    
     );
});

export default Cell;
