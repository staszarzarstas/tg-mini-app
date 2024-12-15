import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {styled} from '@mui/system';
import TextField from '@mui/material/TextField';
import {animated, useSpring} from '@react-spring/web';

export default function ScrollableTabsButtonPrevent() {
    const [value, setValue] = React.useState(0);
    const [isSearchActive, setIsSearchActive] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const searchInputRef = React.useRef<HTMLInputElement>(null);

    const items = ["All Games", "New Games", "All Slots", "Live", "Arcade", "Poker", "Blackjack"];

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const toggleSearch = () => {
        setIsSearchActive((prev) => {
            if (!prev) {
                setTimeout(() => searchInputRef.current?.focus(), 300); // Фокус на поле
            }
            return !prev;
        });
    };

    // Анимация для поля поиска
    const searchAnimation = useSpring({
        opacity: isSearchActive ? 1 : 0,
        transform: isSearchActive ? `translateY(0px)` : `translateY(-20px)`,
        display: isSearchActive ? 'flex' : 'none',
    });

    const filteredItems = items
        .filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort(); // Сортировка по алфавиту

    // Стили для кнопки поиска
    const SearchButton = styled(IconButton)({
        color: '#fff',
        padding: '10px',
        backgroundColor: '#1D1D1D',
        borderRadius: '5px',

    });

    return (
        <Box
            sx={{
                maxWidth: {xs: 320, sm: 480},
                borderRadius: '10px',
                // padding: '0px',
                width: '390px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '10px', // Пространство между кнопкой и табами
                }}
            >
                <SearchButton onClick={toggleSearch}>
                    <SearchIcon/>
                </SearchButton>

                {isSearchActive && (
                    <animated.div style={searchAnimation}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginLeft: '10px', // Отступ между кнопкой и полем
                            }}
                        >
                            <TextField
                                inputRef={searchInputRef} // Ссылка для фокуса
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                variant="outlined"
                                placeholder="Search Game"
                                sx={{
                                    flex: 1,
                                    input: {
                                        color: 'white',
                                        backgroundColor: '#2A2A2A',
                                        borderRadius: '5px',
                                        padding: '10px',
                                        width: '250px'
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                }}
                            />
                            <IconButton
                                onClick={() => {
                                    toggleSearch();
                                    setSearchQuery(''); // Очистка запроса при закрытии
                                }}
                                sx={{
                                    color: '#fff',
                                    padding: '9px',
                                    backgroundColor: '#1D1D1D',
                                    borderRadius: '10px',

                                }}
                            >
                                <CloseIcon/>
                            </IconButton>
                        </Box>
                    </animated.div>
                )}
            </Box>
            <Box
                sx={{
                    bgcolor: '#1D1D1D',
                    borderRadius: '10px',
                    padding: '10px',
                    width: '390px'
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable prevent tabs example"
                    sx={{
                        color: 'white',
                        '& .MuiTabs-flexContainer': {
                            justifyContent: 'flex-start',
                        },
                        '& .MuiTab-root': {
                            color: 'white',
                        },
                        '& .Mui-selected': {
                            color: '#FFD60A !important',
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#FFD60A', // Цвет подчеркивания
                        },
                    }}
                >
                    {filteredItems.map((item, index) => (
                        <Tab key={index} label={item}/>
                    ))}
                </Tabs>
            </Box>
        </Box>
    );
}
