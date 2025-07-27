const { useState } = React;

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <h2 className="page home">Welcome to Home</h2>;
      case "about":
        return <h2 className="page about">About Us</h2>;
      case "contact":
        return <h2 className="page contact">Contact Us</h2>;
      default:
        return <h2>Page Not Found</h2>;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <button onClick={() => setActivePage("home")}>Home</button>
        <button onClick={() => setActivePage("about")}>About</button>
        <button onClick={() => setActivePage("contact")}>Contact</button>
      </nav>
      {renderContent()}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);