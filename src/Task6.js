import React, { useState } from 'react';

function Task6() {
  const [likeCount, setLikeCount] = useState(0);

  const incrementLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div>
      <button onClick={incrementLike} style={{backgroundColor:"red"}}>
        Like {likeCount}
      </button>
    </div>
  );
}

export default Task6;
