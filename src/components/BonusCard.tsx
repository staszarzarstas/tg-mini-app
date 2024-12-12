// Импортируем необходимые модули
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/BonusCard.css";

// Интерфейс для пропсов
interface BonusCardProps {
    cards: {
        title: string;
        description: string;
        image: string;
    }[];
}

const BonusCard = ({cards}: BonusCardProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="bonus-container">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index}>
                        <section
                            className="bonus"
                            style={{
                                backgroundImage: `url(${card.image})`,
                            }}
                        >
                            <h1>{card.title}</h1>
                            <p>{card.description}</p>
                            <button>Read More</button>
                        </section>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BonusCard;