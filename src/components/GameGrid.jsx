/* eslint-disable react/prop-types */
// import React from 'react';
import GameCard from './GameCard';
import './GameGride.css';

function GameGrid({ searchTerm }) {
  const games = [
    { id: 1, title: '3-D Cube Master', image: 'http://surl.li/rprqob', category: 'Puzzle', link:'https://cube-git-main-palash-tinkhedes-projects.vercel.app/' },
    { id: 2, title: 'Tic Tac Toe', image: "http://surl.li/szepop", category: 'Puzzle', link:'https://tic-tac-toe-jade-pi.vercel.app/' },
    { id: 3, title: 'Bricks Game', image: 'http://surl.li/iuopdk', category: 'Puzzle', link:'https://bricks-game-three.vercel.app/' },
    { id: 4, title: 'ping pong', image: 'http://surl.li/ruehyh', category: 'Action', link:'https://ping-pong-eta-eight.vercel.app/'},
    { id: 5, title: 'Shooting Game', image: 'http://surl.li/qvjzzu', category: 'Adventure', link:'https://shooting-game-sigma.vercel.app/' },
    { id: 6, title: 'Geometry Dash', image: 'https://feji.us/smxv3x', category: 'Adventure', link:'https://yandex.com/games/app/359038#app-id=359038&catalog-session-uid=catalog-459dc499-bdff-5d6b-8123-8d26ec44160a-1727067019937-ac98&rtx-reqid=1870543078100303224&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D&redir-data=%7B%22block%22%3A%22suggested%22%2C%22block_index%22%3A1%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A5%2C%22first_screen%22%3A1%2C%22page%22%3A%22main%22%2C%22rn%22%3A280005540%2C%22row%22%3A2%2C%22rtx_reqid%22%3A%221870543078100303224%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221727067019656389-11438127484473184980-md5kockuo7te3oxw-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.com%252Fgames%252F%22%7D' },
    { id: 7, title: 'Ai Chess', image: 'http://surl.li/iddois', category: 'Racing', link:'http://surl.li/nkzalx' },
    { id: 8, title: 'Skribbl', image: 'https://feji.us/hicsj1', category: 'Puzzle', link:'https://skribbl.io/' },
    { id: 9, title: 'DTA 6', image: 'http://surl.li/nmpeqa', category: 'Action', link:'https://yandex.com/games/app/285639' },
    { id: 10, title: 'Basket Random', image: 'https://feji.us/r5iuxz', category: 'Adventure', link:"https://feji.us/ftsiqw"},
    { id: 11, title: 'Teteris', image: 'http://surl.li/ykvcxq', category: 'Adventure', link:'https://teteris.vercel.app/' },
    { id: 20, title: 'Froza Horizon 6', image: 'http://surl.li/nygeob', category: 'Action', link:"http://surl.li/pczclp" },
    { id: 18, title: 'Getting On It', image: 'https://feji.us/huwbfx', category: 'Racing' , link:'https://feji.us/bed84j'},
    { id: 19, title: 'Among Os', image: 'http://surl.li/qzhcbu', category: 'Puzzle', link:"https://feji.us/l1fmlf" },
    { id: 21, title: 'YourCraft', image: 'http://surl.li/vkvcok', category: 'Adventure', link:"http://surl.li/adqbvg" },
    { id: 12, title: 'Poker', image: 'https://feji.us/iurglj', category: 'Racing', link:'https://www.247freepoker.com/' },
    { id: 13, title: 'Red Ball 4', image: 'https://feji.us/ge6v2t', category: 'Puzzle', link:"https://red-ball4.com/" },
    { id: 14, title: 'Time Shooter ', image: 'https://feji.us/lt1dvi', category: 'Action', link:"https://feji.us/ca8x5l" },
    { id: 15, title: 'Smash Carts', image: 'https://feji.us/hndglz', category: 'Adventure' , link:"https://smashkarts.io/" },
    { id: 16, title: 'Drive Mad 2', image: 'https://feji.us/a7poiy', category: 'Adventure' , link:"https://feji.us/l6wtb2"},
    { id: 17, title: 'Pixel Path', image: 'https://feji.us/e744kl', category: 'Adventure' , link:'https://feji.us/n9r7cm'},
  ];

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="game-grid">
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameGrid;
