import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import {useState} from 'react';

export default function DenseAppBar() {
    const [balance, setBalance] = useState(1000); // Начальный баланс

    const handleAddBalance = () => {
        setBalance((prev) => prev + 500); // Добавить 500 к балансу
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: '#1D1D1D',
                    width: '390px',
                    height: '60px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', // Тень для эстетики
                }}
            >
                <Toolbar
                    variant="dense"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 10px 8px 10px',
                    }}
                >
                    {/* Бургер-меню */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            backgroundColor: '#292929',
                            borderRadius: '50%',
                            padding: '8px',
                            '&:hover': {backgroundColor: '#3a3a3a'}, // Ховер эффект
                        }}
                    >
                        <MenuIcon sx={{color: 'white'}}/>
                    </IconButton>

                    {/* Логотип */}
                    <Typography
                        component="div"
                        sx={{
                            color: '#FFD60A',
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: '20px',
                            fontWeight: '700',
                            letterSpacing: '-0.05em',

                        }}
                    >
                        TEST
                    </Typography>

                    {/* Баланс и кнопка */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: '400',
                                fontSize: '16px',
                                color: '#f5f5f5',
                                backgroundColor: '#0F0F0F',
                                borderRadius: '8px',
                                padding: '1px 1px 1px 10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '8px',
                                boxShadow: 'inset 0px 1px 3px rgba(255, 255, 255, 0.1)', // Легкая глубина
                                width: '145px',
                                height: '44px',
                                fontFamily: 'Poppins',
                                lineHeight: '24px',
                                margin: '0',
                            }}
                        >
                            {balance}₽
                        </Typography>
                        <Button
                            sx={{
                                backgroundColor: '#FFD60A',
                                color: '#1D1D1D',
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '14px',
                                fontWeight: '600',
                                borderRadius: '8px',
                                width: '42px',
                                height: '42px',
                                minWidth: '42px',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
                                '&:hover': {
                                    backgroundColor: '#FFC107',
                                },
                            }}
                            onClick={handleAddBalance}
                        >
                            +
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
