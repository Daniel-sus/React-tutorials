import Article from "./Article";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";

const Route = ({ path, children, exact }) => {
  const { pathname } = window.location;
  if (exact) {
    if (pathname === path) {
      return children;
    }
  } else {
    if (pathname.includes(path)) {
      return children;
    }
  }
  return null;
};

export default function App() {
  const { pathname } = window.location;
  const id = pathname.split("/")[2];

  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path={`/post/${id}`}>
        <Article id={id} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <br />
      <Footer />
    </div>
  );
}
