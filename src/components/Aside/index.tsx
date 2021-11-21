import React from 'react';

import { 
  Container, 
  List, 
  ListCanais 
} from './styles';
/*
historico:
  

seus videos:
  

assistir dps:
  

videos com like:
  

mostrar mais:
  

*/
const Aside: React.FC = () => {
  return (
    <Container>
      <List>
        <li className="active">
          <svg className="ytb_svg__wrapper" viewBox="0 0 25 25" focusable="false"><g><path fill="#fff" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path></g></svg>
          <span>Home</span>
        </li>
        <li>
          <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable="false"><g><path d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"></path></g></svg>
          <span>Mais vistos</span>
        </li>
        <li>
        <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable="false"><g><path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"></path></g></svg>
          <span>Escrições</span>
        </li>
      </List>

      <List>
        <li>
        <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable="false"><g><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
          <span>Playlist</span>
        </li>
        <li>
        <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable="false"><g><path d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"></path></g></svg>
          <span>Historico</span>
        </li>
        <li>
          <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable="false"><g><path d="M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.9h12.8a1.8 1.8 0 0 0 1.9-1.9V5.6a1.8 1.8 0 0 0-1.9-1.8z"></path><path d="M10.2 9v6.5l5-3.2-5-3.2z"></path></g></svg>
          <span>Seus Videos</span>
        </li>
        <li>
          <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable="false"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
          <span>Assistir depois</span>
        </li>
        <li>
        <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable="false"><g><path d="M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z"></path></g></svg>
          <span>Marcados com gostei</span>
        </li>
        <li>
          <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable="false"><g><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g></svg>
          <span>Mostrar Mais</span>
        </li>
      </List>

      <List>
        <li>
          <img src="http://github.com/naruto.png" alt="" />
          <span>Canal</span>
        </li>
        <li>
          <img src="http://github.com/matheuspython.png" alt="" />
          <span>Programador autodidata</span>
        </li>
        <li>
          <img src="http://github.com/dragon.png" alt="" />
          <span>Dragon</span>
        </li>
        <li>
          <img src="http://github.com/python.png" alt="" />
          <span>Python</span>
        </li>
        <li>
          <img src="http://github.com/rocketseat.png" alt="" />
          <span>Rocketseat</span>
        </li>
        <li>
          <img src="http://github.com/kira.png" alt="" />
          <span>javascript</span>
        </li>
      </List>
    </Container>
  )
}

export default Aside;