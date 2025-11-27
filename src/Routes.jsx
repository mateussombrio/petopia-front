import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { StrictMode } from "react";
import LoginCadastro from "./pages/LoginCadastro.jsx";
import AdoptionPage from "./pages/Adocao.jsx";
import "./styles/LoginCadastro.css";
import "./styles/Adocao.css";
import "./styles/index.css";
import PetDetail from "./pages/PetDetail.jsx";
import "./styles/PetDetail.css";
import CadastroPet from "./pages/CadastroPet.jsx";
import "./styles/CadastroPet.css";
import Retirada from "./pages/Retirada.jsx";
import "./styles/Retirada.css";
import HomePage from "./pages/Home.jsx";
import "./styles/Home.css";
import Layout from "./pages/Layout.jsx";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/animais/:id",
          element: <PetDetail />,
        },
        {
          path: "/cadastro",
          element: <CadastroPet />,
        },
        {
          path: "/retirada/:id",
          element: <Retirada />,
        },
      ],
    },

    // Sem Header, mas com Footer
    {
      path: "/login",
      element: <LoginCadastro />,
    },
  ]);

  
  return <RouterProvider router={router} />;
}

export default Routes;
