import React from 'react';
import logo from './logo.svg';
import { Container, Image } from 'react-bootstrap';
import './App.css';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import BlackCards from './components/BlackCards';
import Referals from './components/Referals';
import WindowDimensionsProvider from './components/WindowDimensionsProvider';
import Footer from './components/Footer';

function App() {
    return (
        <WindowDimensionsProvider>
            <div className="App">
                <Container>
                    <NavBar />
                    <Introduction />
                    <br />
                    <Image
                        responsive
                        src="text.png"
                        rounded
                        style={{
                            maxWidth: '55%'
                        }}
                    />
                    <BlackCards />
                    <Referals />
                    <Footer />
                </Container>
            </div>
        </WindowDimensionsProvider>
    );
}

export default App;
