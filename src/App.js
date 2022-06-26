import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/Navigation.component';
import Home from "./routes/home/Home.component";
import SignIn from './routes/signIn/SignIn.component';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='signIn' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
