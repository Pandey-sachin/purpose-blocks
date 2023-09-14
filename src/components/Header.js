import React,{ useState } from 'react';

const Header = ({ nextWord, score }) => {

    // const [score, setScore] = useState(0);
    // const [nextWord, setNextWord] = useState(''); 
    
  return (
    <header className="header">
    <div class="logo">Userfacet</div>
    <div className="next-word">
      Next Word: {nextWord}
    </div>
    <div className="score">
      Score:{score}
    </div>
    </header>
  );
};

export default Header;