import {useNavigate} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HeaderPageViewAll = () => {
    const navigate = useNavigate(); // Хук для навигации

    return (
        <div className="header-page-view-all">
            <div className="header-top">
                <button className="back-button" onClick={() => navigate(-1)}><ArrowBackIcon/></button>
                <h2 className="page-title">Popular Games</h2>
            </div>
            <div className="search-section">
                <input type="text" placeholder="Search Game" className="search-input"/>
                <button className="lucky-button">I'm Feeling Lucky</button>
            </div>
            <div className="filters">
                <select className="provider-select">
                    <option>Providers</option>
                    {/* Добавьте варианты провайдеров */}
                </select>
                <select className="alphabet-select">
                    <option>A-Z</option>
                    {/* Добавьте сортировку по алфавиту */}
                </select>
            </div>
        </div>
);
};

export default HeaderPageViewAll;
