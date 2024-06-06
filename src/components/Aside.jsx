import React from 'react';
import Button from "@mui/material/Button";
import menu from "../assets/menu.svg";
import result from '../assets/result.svg';
import video from '../assets/video.svg'
import achivments from '../assets/achivments.svg'



const Aside = () => {
    return (
        <div>
            <div style={{
                width: '371px',
                height: '344px',
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',

                padding: 20,
            }}>
                <h2 style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Фильтр ленты</h2>
                <Button
                    startIcon={<img src={menu} style={{ marginRight: '8px' }} />}
                    sx={{
                        my: 2,
                        color: 'grey',
                        fontSize: 14,
                        width: 331,
                        height: 40,
                        justifyContent: 'flex-start', // Выровнять содержимое по левому краю
                        '&:hover': { color: 'black' },
                        textTransform: 'none', // Отключить автоматическое преобразование текста в верхний регистр
                    }}
                >
                    Все
                </Button>
                <Button
                    startIcon={<img src={result} style={{ marginRight: '8px' }} />}
                    sx={{
                        my: 2,
                        color: 'grey',
                        fontSize: 14,
                        width: 331,
                        height: 40,
                        justifyContent: 'flex-start', // Выровнять содержимое по левому краю
                        '&:hover': { color: 'black' },
                        textTransform: 'none', // Отключить автоматическое преобразование текста в верхний регистр
                    }}
                >
                    Результаты соревнований
                </Button>

                <Button
                    startIcon={<img src={video} style={{ marginRight: '8px' }} />}
                    sx={{
                        my: 2,
                        color: 'grey',
                        fontSize: 14,
                        width: 331,
                        height: 40,
                        justifyContent: 'flex-start', // Выровнять содержимое по левому краю
                        '&:hover': { color: 'black' },
                        textTransform: 'none', // Отключить автоматическое преобразование текста в верхний регистр
                    }}
                >
                    Видео
                </Button>
                <Button
                    startIcon={<img src={achivments} style={{ marginRight: '8px' }} />}
                    sx={{
                        my: 2,
                        color: 'grey',
                        fontSize: 14,
                        width: 331,
                        height: 40,
                        justifyContent: 'flex-start', // Выровнять содержимое по левому краю
                        '&:hover': { color: 'black' },
                        textTransform: 'none', // Отключить автоматическое преобразование текста в верхний регистр
                    }}
                >
                    Достижения
                </Button>





            </div>
        </div>
    );
};

export default Aside;
