import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="container">
        <header>
          <h1>Jonas</h1>
          <p class="subtitle">Web</p>
        </header>

        <section>
          <h2>
            <i data-lucide="code" class="icon"></i> Über mich
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            consequatur cupiditate molestias corrupti, sequi rem iusto. Porro,
            voluptas, corporis placeat fugiat tenetur, laboriosam harum natus
            odio architecto tempore dolore iste non quibusdam nesciunt provident
            hic possimus. Velit asperiores in hic nulla ipsum perspiciatis
            incidunt ex, ullam, provident facere nostrum corrupti!
          </p>
        </section>

        <section>
          <h2>
            <i data-lucide="layers" class="icon"></i> Fähigkeiten
          </h2>
          <ul class="skills-list">
            <li>
              <i data-lucide="smartphone" class="icon"></i> iOS (Swift)
            </li>
            <li>
              <i data-lucide="smartphone" class="icon"></i> Android (Kotlin)
            </li>
            <li>
              <i data-lucide="code" class="icon"></i> React Native
            </li>
            <li>
              <i data-lucide="code" class="icon"></i> JavaScript/TypeScript
            </li>
            <li>
              <i data-lucide="layers" class="icon"></i> HTML/CSS
            </li>
            <li>
              <i data-lucide="code" class="icon"></i> C/C#
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <i data-lucide="smartphone" class="icon"></i> Projekte
          </h2>
          <ul class="projects-list">
            <li>
              <h3>FitTrack</h3>
              <p>
                Eine Fitness-App zur Verfolgung von Workouts und Ernährung (iOS
                & Android)
              </p>
            </li>
            <li>
              <h3>CityExplorer</h3>
              <p>Eine Reise-App mit AR-Funktionen für Stadtrundgänge (WEB)</p>
            </li>
            <li>
              <h3>TaskMaster</h3>
              <p>
                Eine produktivitätssteigernde To-Do-Liste App mit Cloud-Sync
                (React Native)
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <i data-lucide="award" class="icon"></i> Auszeichnungen
          </h2>
          <ul class="awards-list">
            <li>Best Webseite</li>
            <li>Best Designes</li>
          </ul>
        </section>

        <footer>
          <h2>Kontakt</h2>
          <div class="social-links">
            <a href="#" class="social-link">
              <i data-lucide="github" class="icon"></i>
            </a>
            <a href="#" class="social-link">
              <i data-lucide="linkedin" class="icon"></i>
            </a>
          </div>
          <p>jonas@jojo.ch</p>
        </footer>
      </div>
    </>
  );
}

export default App;
