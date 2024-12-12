import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import { Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface GamesTypeProps {
    title: string;
    icon: React.ReactNode;
    games: { title: string; image: string }[];
    hideViewAll?: boolean; // Убрать "View All"
    onBack?: () => void; // Обработчик для стрелки назад
    link: string; // Путь для передачи на страницу со всеми играми
}

const Games = (props: GamesTypeProps) => {
    return (
        <Box sx={{ padding: "20px", bgcolor: "#1D1D1D", borderRadius: "10px", marginTop: "5px", width: '390px' }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {props.onBack ? (
                        <IconButton onClick={props.onBack}>
                            <ArrowBackIcon sx={{ color: "white", marginRight: "10px" }} />
                        </IconButton>
                    ) : (
                        props.icon
                    )}
                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "26px",
                            color: "white",
                        }}
                    >
                        {props.title}
                    </Typography>
                </Box>
                {!props.hideViewAll && (
                    <Link to={props.link} style={{ textDecoration: "none" }}>
                        <Typography
                            sx={{
                                color: "white",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            View All
                        </Typography>
                    </Link>
                )}
            </Box>

            <div
                className="game-list"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                }}
            >
                {props.games.map((game, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: "100%",
                            height: "156px",
                            bgcolor: "#2E2E2E",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        <CardActionArea>
                            <CardMedia component="img" height="156" image={game.image} alt={game.title} />
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </Box>
    );
};

export default Games;
