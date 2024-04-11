import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, spritesFront, spritesBack}) {
  const [cardClicked, setCardClicked] = useState(false)

  function handleClick() {
    setCardClicked(!cardClicked)
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img alt="oh no!" src={cardClicked === false ? spritesFront : spritesBack}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
