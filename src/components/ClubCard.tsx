import React from 'react';

type ClubCardProps = {
  name: string;
};

const ClubCard = (props: ClubCardProps) => {
  return (
    <div>
      <h1>Hi!</h1>
      <h2>{props.name}</h2>
    </div>
  );
};

export default ClubCard;
