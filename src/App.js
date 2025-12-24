import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <div>
          <MainNavigation />
          <main>
            <Users />
          </main>
        </div>
      ),
    },
    {
      path: "/:userId/places",
      element: (
        <div>
          <MainNavigation />
          <main>
            <UserPlaces />
          </main>
        </div>
      ),
    },
    {
      path: "/auth",
      element: (
        <div>
          <MainNavigation />
          <main>
            <h1>Signup + login</h1>
          </main>
        </div>
      ),
    },
    {
      path: "/places/new",
      element: (
        <div>
          <MainNavigation />
          <main>
            <NewPlace />
          </main>
        </div>
      ),
    },
    {
      path: "/places/:id",
      element: (
        <div>
          <MainNavigation />
          <main>
            <h1>update place form</h1>
          </main>
        </div>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
