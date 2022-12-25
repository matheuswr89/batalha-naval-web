import AppRoute from "./routes";
import GlobalStyles from "./styles/globalStyles";

const App = () => {
  const rotas = ["", "/", "/board", "/game", "/loading"];
  const location = window.location.href.split("/")[3];
  if (!rotas.includes(location)) window.location.href = "/";
  return (
    <>
      <AppRoute />
      <GlobalStyles />
    </>
  );
};

export default App;
