import { ReactElement, ReactNode } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AuthLayout from './components/Layout/AuthLayout';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Root from './components/Root';
import Temp from './components/Temp';
import Temp2 from './components/Temp2';

let isLoggedIn: boolean = false;

const ProtectedRoute = ({ element }: { element: ReactElement }): ReactElement => {
  if (!isLoggedIn) return <Navigate to="/login" />
  return element;
}

const UnProtectedRoute = ({ element }: { element: ReactElement }): ReactElement => {
  if (isLoggedIn) return <Navigate to="/" />
  return element;
}

function App() {
  return (
    <div className="App">
      <Routes>

        {/* <Route path="/" element={<Root/>}>
          <ProtectedRoute path="/" element={<Temp2/>}/>
          <Route path="/login" element={<Temp/>}/>
        </Route>
        <Route path="*" element={<NotFound />} /> */}



        <Route element={<Root />}>
          <Route path="/login" element={<UnProtectedRoute element={<Login />} />} />
          <Route path="/register" element={<UnProtectedRoute element={<Temp />} />} />


          <Route path="/" element={<ProtectedRoute element={<Temp2 />} />} />
        </Route>
        {/*</Routes> //  <ProtectedRoute path="jhjk" element={<Temp2/>}/>


          /* <Route path="/temp2" element={<Temp2 />} />
          <Route
            path="dashboard"
            element={<Temp />}
            // loader={({ request }) =>
            //   fetch("/api/dashboard.json", {
            //     signal: request.signal,
            //   })
            // }
          />
          <Route element={<AuthLayout />}>
            <Route
              path="login"
              element={<Temp2 />}
              // loader={redirectIfUser}
            />
            <Route path="logout" />
          </Route> */
        // </Route>


        /* <Route path="/" element={<Temp />} /> */}

        {/* <Route path="projects/:projectId/:factoryId" /> */}




      </Routes>
    </div>
  );
}

export default App;
