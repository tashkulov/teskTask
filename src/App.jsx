import './App.css';
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import SecondContent from "./components/SecondContent.jsx";
import ThirdContent from "./components/ThirdContent.jsx";
import Aside from "./components/Aside.jsx";
import AsideVelo from "./components/AsideVelo.jsx";

function App() {
    return (
        <div>
            <Navbar />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '25px',
                marginTop: '100px'
            }}>
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <MainContent />
                    <div style={{ marginTop: '20px' }}><SecondContent /></div>
                    <div style={{ marginTop: '20px' }}><ThirdContent /></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Aside />
                    <AsideVelo />
                </div>
            </div>
        </div>
    );
}

export default App;

