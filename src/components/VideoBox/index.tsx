import React from 'react';

import { Container } from './styles';

interface VideoProps {
  img: string;
  imgCanal: string;

  titulo: string
  nomeCanal: string
  viws: string
}

export const VideoBox: React.FC<VideoProps> = ({
  img,
  imgCanal,
  nomeCanal,
  titulo,
  viws
}) => {
  return (
    <Container>
      <img src={img} alt="video do canal" />
      <section>
        <img src={imgCanal} alt="img do canal" />
      </section>
      <section>
        <h1>{titulo}</h1>
        <span>{nomeCanal}</span>
        <p>{viws}</p>
      </section>
    </Container>
  )
}

