import './App.css'
import '../src/style.scss'
import style from 'styled-components';


const Article = style.article`
  display:flex;
  width:400px;
  margin: auto;
  border:1px solid rgba(155, 154, 154, 0.689);
  border-radius:4px;

`

const Figcaption=style.figcaption`
display:flex;
align-items:center;
padding-left:10%;
min-width: 500px;
font-size:1rem;
`

function App() {
 

  return (
    <>
    <Article>
    <article>
      <figure>
        <img src='/src/assets/Album-mariah.jpg'></img>
        <Figcaption>
        <figcaption>
          <h2>All I Want</h2>
          <h4> Mariah Carrey (1994)</h4>
        </figcaption>
        </Figcaption>
      </figure>
      <div className='rate'>
      <p>Rate this album</p>
      <ul>
        <li><img src="/src/assets/icons8-étoile-16.png"></img></li>
        <li><img src="/src/assets/icons8-étoile-16.png"></img></li>
        <li><img src="/src/assets/icons8-étoile-16.png"></img></li>
        <li><img src="/src/assets/icons8-étoile-16.png"></img></li>
        <li><img src="/src/assets/icons8-étoile-16.png"></img></li>
      </ul>
      </div>
    </article>  
    </Article>

    
    </>
  )
}

export default App
