import React from 'react';
import Block from './Block';

const Grid = ({ blocks }) => {
  return (
    <div className="grid">

        i am grid
      {/* {blocks.map((block) => (
        <Block key={block.id} word={block.word} />
      ))} */}
    </div>
  );
};

export default Grid;