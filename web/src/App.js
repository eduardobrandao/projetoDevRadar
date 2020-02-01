import React, { useEffect } from 'react';

import "./global.css"
import "./App.css"
import "./Sidebar.css"
import "./Main.css"



function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position)=> {
        console.log(position);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, [])
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input name="github_username" id="github_username" required />  
          </div>
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required /> 
          </div>
          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required /> 
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required /> 
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5A9GjEV7dgqiBEYk-b6ylJIjemM3OE8mNeA7fIcWwmU7xkmu3&s" alt="Eduardo Brandão" />
              <div className="user-info">
                <strong>Eduardo Brandão</strong>
                <span>ReactJS, React Native, Node.JS</span>
              </div>
            </header>
            <p>Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/eduardo01">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5A9GjEV7dgqiBEYk-b6ylJIjemM3OE8mNeA7fIcWwmU7xkmu3&s" alt="Eduardo Brandão" />
              <div className="user-info">
                <strong>Jhousyfran Costa</strong>
                <span>Vue.JS, Láravel, PHP, JavaScript, Node.JS</span>
              </div>
            </header>
            <p>Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/eduardo01">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5A9GjEV7dgqiBEYk-b6ylJIjemM3OE8mNeA7fIcWwmU7xkmu3&s" alt="Eduardo Brandão" />
              <div className="user-info">
                <strong>Carlos Alberto</strong>
                <span>ReactJS, React Native, Node.JS</span>
              </div>
            </header>
            <p>Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/eduardo01">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5A9GjEV7dgqiBEYk-b6ylJIjemM3OE8mNeA7fIcWwmU7xkmu3&s" alt="Eduardo Brandão" />
              <div className="user-info">
                <strong>George Wallace</strong>
                <span>Vue.JS, Node.JS</span>
              </div>
            </header>
            <p>Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/eduardo01">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
