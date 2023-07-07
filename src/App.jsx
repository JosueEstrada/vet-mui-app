import "./App.css";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import Layout2 from "./components/layout/Layout2.jsx";

function App() {
  return (
    <>
      <Layout2>
        <AppRoutes />
      </Layout2>
    </>
  );
}

export default App;
