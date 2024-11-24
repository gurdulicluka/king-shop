import { RouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

const Router = () => {
	return <RouterProvider router={router} />;
};

export { Router };
