import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from'./screens/Home/home.jsx';
import LevelSelection from './screens/LevelSelection/levelSelection.jsx';

import Level1Page1 from './screens/levels/level1/level1-page1/level1_page1.jsx';
import Level1Page2 from './screens/levels/level1/level1-page2/level1_page2.jsx';
import Level1Page3 from './screens/levels/level1/level1-page3/level1_page3.jsx';

import Level2Page1 from './screens/levels/level2/level2_page1';
import Level2Page2 from './screens/levels/level2/level2_page2';
import Level2Page3 from './screens/levels/level2/level2_page3';

import Level3Page1 from './screens/levels/level3/level3_page1';
import Level3Page2 from './screens/levels/level3/level3_page2';
import Level3Page3 from './screens/levels/level3/level3_page3';

import Level4Page1 from './screens/levels/level4/level4_page1';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {path:'/LevelSelection',
  element: <LevelSelection />
  },
  {path:'/level1-1',
  element: <Level1Page1 />
  },
  {path:'/level1-2',
  element: <Level1Page2 />
  },
  {path:'/level1-3',
  element: <Level1Page3 />
  },
 

  {path:'/level2-1',
  element: <Level2Page1 />
  },
  {path:'/level2-2',
  element: <Level2Page2 />
  },
  {path:'/level2-3',
  element: <Level2Page3 />
  },

  {path:'/level3-1',
  element: <Level3Page1 />
  },
  {path:'/level3-2',
  element: <Level3Page2 />
  },
  {path:'/level3-3',
  element: <Level3Page3 />
  },

  {path:'/level4-1',
  element: <Level4Page1 />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
