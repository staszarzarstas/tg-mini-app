import HeaderPageViewAll from "../components/HeaderPageViewAll"; // Импортируем HeaderPageViewAll
import Games from "../components/Games";
import Footer from "../components/Footer";
// import {useNavigate} from "react-router-dom";
import {useState} from "react"; // Импортируем useState для управления состоянием
import {Box, Typography} from "@mui/material"; // Импортируем Box и Typography
import '../components/styles/HeaderPageViewAll.css';

const PopularGame = () => {
    // const navigate = useNavigate(); // Хук для навигации

    // Изначальный список игр
    const allGames = [
        {title: "Fortuna", image: "/fortuna.jpg"},
        {title: "Beware", image: "/beware.jpg"},
        {title: "Olympus", image: "/olympus.jpg"},
        {title: "Tomb", image: "/tomb.jpg"},
        {title: "Wond", image: "/wond.jpg"},
        {title: "Mahal", image: "/mahal.jpg"},
        {title: "Ripe", image: "/ripe-card.png"},
        {title: "Sugar", image: "/sugar-card.png"},
        {title: "Zeus", image: "/zeus-card.png"},
        {title: "Tomb", image: "/tomb.jpg"},
        {title: "Wond", image: "/wond.jpg"},
        {title: "Mahal", image: "/mahal.jpg"},
        {title: "Fortuna", image: "/fortuna.jpg"},
        {title: "Beware", image: "/beware.jpg"},
        {title: "Olympus", image: "/olympus.jpg"},
        {title: "Tomb", image: "/tomb.jpg"},
        {title: "Wond", image: "/wond.jpg"},
        {title: "Mahal", image: "/mahal.jpg"},
        {title: "Fortuna", image: "/fortuna.jpg"},
        {title: "Beware", image: "/beware.jpg"},
        {title: "Olympus", image: "/olympus.jpg"},
        {title: "Tomb", image: "/tomb.jpg"},
        {title: "Wond", image: "/wond.jpg"},
        {title: "Mahal", image: "/mahal.jpg"},
        {title: "Fortuna", image: "/fortuna.jpg"},
        {title: "Beware", image: "/beware.jpg"},
        {title: "Olympus", image: "/olympus.jpg"},
        {title: "Tomb", image: "/tomb.jpg"},
        {title: "Wond", image: "/wond.jpg"},
        {title: "Mahal", image: "/mahal.jpg"},

    ];

    const [visibleGames, setVisibleGames] = useState(12); // Состояние для количества видимых игр
    const [loading, setLoading] = useState(false); // Состояние для отображения кнопки загрузки

    const loadMoreGames = () => {
        if (visibleGames < allGames.length) {
            setLoading(true);
            setTimeout(() => {
                setVisibleGames((prev) => prev + 12); // Загружаем по 12 игр
                setLoading(false);
            }, 500); // Имитируем задержку
        }
    };

    const displayedGames = allGames.slice(0, visibleGames); // Отображаем только ограниченное количество игр

    return (
        <div className="app">
            <HeaderPageViewAll/>
            <Games
                games={displayedGames}
                title="" // Убираем заголовок
                icon={null} // Убираем стрелку
                hideViewAll={true} // Убираем "View All"
                link="/all-games" // Путь на страницу со всеми играми
            />
            {/* Кнопка "Load More" и текст */}
            {visibleGames < allGames.length && (
                <Box sx={{
                    textAlign: "center",
                    marginTop: "20px",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '390px'
                }}>
                    <button
                        onClick={loadMoreGames}
                        disabled={loading}
                        style={{
                            padding: "11px 12px 11px 12px",
                            backgroundColor: "#1b1919",
                            border: "none",
                            borderRadius: "8px",
                            color: "#FAFAFA",
                            cursor: loading ? "not-allowed" : "pointer",
                            width: '135px',
                            height: "42px",
                            fontFamily: "Poppins",
                            fontSize: '14px',
                            textAlign: "center",
                            lineHeight: '20px'
                        }}
                    >
                        {loading ? "Loading..." : "Load More"}
                    </button>
                    <Typography sx={{
                        marginTop: "10px",
                        color: "white",
                        fontFamily: 'Poppins',
                        fontSize: '10px',
                        lineHeight: '14px',
                    }}>
                        {`Displaying ${visibleGames} of ${allGames.length} games`}
                    </Typography>
                </Box>
            )}
            <Footer/>
        </div>
    );
};

export default PopularGame;
