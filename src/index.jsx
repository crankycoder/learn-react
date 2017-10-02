import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

class Square extends React.Component {
  render() {
      return React.createElement(
      'button',
      { className: 'square',
        onClick: () => this.props.onClick()
      },
      this.props.value
    );
  }
}

function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {
  renderSquare(i) {
    return React.createElement(Square, {
      value: this.props.squares[i],
      onClick: () => this.props.onClick(i)
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'board-row' },
        this.renderSquare(0),
        this.renderSquare(1),
        this.renderSquare(2)
      ),
      React.createElement(
        'div',
        { className: 'board-row' },
        this.renderSquare(3),
        this.renderSquare(4),
        this.renderSquare(5)
      ),
      React.createElement(
        'div',
        { className: 'board-row' },
        this.renderSquare(6),
        this.renderSquare(7),
        this.renderSquare(8)
      )
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      // A winner is already found or this square is already
      // filled.
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return React.createElement(
        'div',
        { className: 'game' },
        React.createElement('ol', 
            {className: 'some-list'},
            [
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'div',
                        {className: 'wishlist-item'},
                        [
                            React.createElement(
                                'div',
                                {className: 'item-description'},
                                "Vantrue N2 Dashcam",
                            ),
                            React.createElement(
                                'div',
                                {className: 'item-price'},
                                "$200.00",
                            ),
                            React.createElement(
                                'img',
                                {src:"https://images-na.ssl-images-amazon.com/images/I/617lYhsy%2BJL._AC_UL115_.jpg"},
                                null,
                            )
                        ],
                    )
                ),
            ]
        )
    );
  }

}

// ========================================

ReactDOM.render(React.createElement(Game, null), document.getElementById('app'));

