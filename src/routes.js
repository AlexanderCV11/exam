import React, { PureComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Notes from './Components/Notes/Notes'
import Error404 from './Components/Error/404'
import Animating from './Components/Animating/Animation';
import Calculator from './Components/Calculator/Calculator';
import Crypto from './Components/Crypto/Crypto';
import Forms from './Components/Forms/Person';
import Pomodoro from './Components/Pomodoro/Timer';
import Portafolio from './Examen/Portafolio';
import Curriculum from './Examen/Curriculum';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='animating' element={<Animating />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/Crypto' element={<Crypto />} />
            <Route path='/forms' element={<Forms />} />
            <Route path='/purecomponent' element={<PureComponent />} />
            <Route path='/pomodoro' element={<Pomodoro />} />
            <Route path='/portafolio' element={<Portafolio />} />
            <Route path='/curriculum' element={<Curriculum />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </App>
)

export default AppRoutes;