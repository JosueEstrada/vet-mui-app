import "./App.css";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import Layout from "./components/layout/Layout.jsx";

function App() {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;
