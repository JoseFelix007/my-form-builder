import Error from '../pages/Error.jsx';
import Base from '../layouts/Base.jsx';

import Home from '../pages/Home.jsx';

const Routes = [
  {
    path: "/",
    element: <Base/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  },
];

export default Routes;