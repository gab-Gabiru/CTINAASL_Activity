
const styles = `
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
}

/* Header */
header {
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
}

/* Navigation bar */
.navbar {
  display: flex;
  background-color: #333;
}

.navbar a {
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Content layout */
.container {
  display: flex;
  flex-wrap: wrap;
}

.side {
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

.main {
  flex: 70%;
  background-color: white;
  padding: 20px;
}

/* Placeholder images */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Footer */
footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
}

/* Responsive design */
@media screen and (max-width: 700px) {
  .container,
  .navbar {
    flex-direction: column;
  }
}
`;

function App() {
  return (
    <>
      <style>{styles}</style>

      <div style={{
        background: "yellow",
        padding: "5px",
        textAlign: "center"
      }}>
        <h4>Resize the browser window to see the responsive effect.</h4>
      </div>

      <header>
        <h1>My Website</h1>
        <p>With a <b>flexible</b> layout.</p>
      </header>

      <nav className="navbar">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </nav>

      <div className="container">

        {/* Sidebar */}
        <aside className="side">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>

          <div className="fakeimg" style={{ height: 200 }}>
            Image
          </div>

          <p>
            Some text about me in culpa qui officia deserunt mollit anim..
          </p>

          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>

          <div className="fakeimg" style={{ height: 60 }}>
            Image
          </div>
          <br />

          <div className="fakeimg" style={{ height: 60 }}>
            Image
          </div>
          <br />

          <div className="fakeimg" style={{ height: 60 }}>
            Image
          </div>
        </aside>

        {/* Main Content */}
        <main className="main">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Oct 7, 2025</h5>

          <div className="fakeimg" style={{ height: 200 }}>
            Image
          </div>

          <p>Some text..</p>

          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>

          <br />

          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2025</h5>

          <div className="fakeimg" style={{ height: 200 }}>
            Image
          </div>

          <p>Some text..</p>

          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
        </main>

      </div>

      {/* Footer */}
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}

export default App;
