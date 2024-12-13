import './App.css';
import ScrollableTabsButtonPrevent from "./components/ScrollableTabsButtonPrevent.tsx";
import Games from "./components/Games.tsx";
import FlameIcon from '@mui/icons-material/Whatshot';
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Header from "./components/Header.tsx";
import BonusCard from "./components/BonusCard.tsx";
import item1Bonus from "./assets/img/item-1-bonus.png";
import item2Bonus from "./assets/img/item-1-bonus.png";
import item3Bonus from "./assets/img/item-1-bonus.png";
import Footer from "./components/Footer.tsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PopularGame from "./pages/PopularGame.tsx";
import NewGame from "./pages/NewGame.tsx";
import SportGames from "./pages/SportGames.tsx";
import CasinoGames from "./pages/CasinoGames.tsx";

const App = () => {
    const bonusCardsData = [
        {
            title: "Welcome Bonus",
            description: "100% up to 2 500 ₽ + 100 Free Spins",
            image: item1Bonus,
        },
        {
            title: "Deposit Bonus",
            description: "50% up to 5 000 ₽ + 50 Free Spins",
            image: item2Bonus,
        },
        {
            title: "Weekly Cashback",
            description: "10% cashback every Monday",
            image: item3Bonus,
        },
    ];

    const popularGames = [
        {title: "Fortuna", image: "/tg-mini-app/fortuna.jpg"},
        {title: "Beware", image: "/tg-mini-app/beware.jpg"},
        {title: "Olympus", image: "/tg-mini-app/olympus.jpg"},
        {title: "Tomb", image: "/tg-mini-app/tomb.jpg"},
        {title: "Wond", image: "/tg-mini-app/wond.jpg"},
        {title: "Mahal", image: "/tg-mini-app/mahal.jpg"},
    ];

    const newGames = [
        {title: "Fortuna", image: "/tg-mini-app/fortuna.jpg"},
        {title: "Beware", image: "/tg-mini-app/beware.jpg"},
        {title: "Olympus", image: "/tg-mini-app/olympus.jpg"},
        {title: "Tomb", image: "/tg-mini-app/tomb.jpg"},
        {title: "Wond", image: "/tg-mini-app/wond.jpg"},
        {title: "Mahal", image: "/tg-mini-app/mahal.jpg"},
    ];

    const casinoGames = [
        {title: "Fortuna", image: "/tg-mini-app/fortuna.jpg"},
        {title: "Beware", image: "/tg-mini-app/beware.jpg"},
        {title: "Olympus", image: "/tg-mini-app/olympus.jpg"},
        {title: "Tomb", image: "/tg-mini-app/tomb.jpg"},
        {title: "Wond", image: "/tg-mini-app/wond.jpg"},
        {title: "Mahal", image: "/tg-mini-app/mahal.jpg"},
    ];

    const sportsGames = [
        {title: "Fortuna", image: "/tg-mini-app/fortuna.jpg"},
        {title: "Beware", image: "/tg-mini-app/beware.jpg"},
        {title: "Olympus", image: "/tg-mini-app/olympus.jpg"},
        {title: "Tomb", image: "/tg-mini-app/tomb.jpg"},
        {title: "Wond", image: "/tg-mini-app/wond.jpg"},
        {title: "Mahal", image: "/tg-mini-app/mahal.jpg"},
    ];

    return (
        <Router basename="/tg-mini-app">
            <Routes>
                <Route path="/" element={
                    <div className="app">
                        <Header/>
                        <BonusCard cards={bonusCardsData}/>
                        <ScrollableTabsButtonPrevent/>
                        <section className="games">
                            <Games title="Popular Games" icon={<FlameIcon sx={{color: 'white', marginRight: '10px'}}/>}
                                   games={popularGames} link="/popular-games"/>
                            <Games title="New Games" icon={<StarIcon sx={{color: 'white', marginRight: '10px'}}/>}
                                   games={newGames} link="/new-games"/>
                            <Games title="Casino Games"
                                   icon={<MonetizationOnIcon sx={{color: 'white', marginRight: '10px'}}/>}
                                   games={casinoGames} link="/casino-games"/>
                            <Games title="Sports Games"
                                   icon={<SportsBasketballIcon sx={{color: 'white', marginRight: '10px'}}/>}
                                   games={sportsGames} link="/SportGames"/>
                        </section>
                        <Footer/>
                    </div>
                }/>
                <Route path="/popular-games" element={<PopularGame/>}/>
                <Route path="/new-games" element={<NewGame/>}/>
                <Route path="/casino-games" element={<CasinoGames/>}/>
                <Route path="/SportGames" element={<SportGames/>}/>
            </Routes>
        </Router>
    );
};

export default App;
