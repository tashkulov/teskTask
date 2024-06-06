import React, { useState } from 'react';
import { Box, Typography, Modal, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import velosport from '../../assets/velosport.jpg';
import gandboll from '../../assets/gandboll.jpg';
import konki from '../../assets/konki.jpg';
import sambo from '../../assets/sambo.jpg';
import wrestling from '../../assets/wrestling.jpg';
import atletika from '../../assets/atletika.jpg';

// Стили для TypeSportModal
const useStyles = makeStyles({
    typeSportModal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 766,
        height: 614,
        backgroundColor: '#FFFFFF',
        boxShadow: 24,
        padding: 20,
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    imageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        marginTop: 20,
    },
    imageBox: {
        position: 'relative',
        width: 226,
        height: 220,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 10,
    },
    button: {
        position: 'absolute',
        bottom: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#FFFFFF',
        color: '#06082C',
        width: 99,
        height: 34,
        borderRadius: 100,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#F1F3F7',
        },
    },
    actionButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    actionButton: {
        width: 126,
        height: 40,
        borderRadius: 10,
        textTransform: 'none',
        fontSize: 14,
    },
    skipButton: {
        backgroundColor: '#F1F3F7',
        color: '#06082C',
        '&:hover': {
            backgroundColor: '#E0E0E0',
        },
    },
    continueButton: {
        backgroundColor: '#06082C',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#333',
        },
    },
});

const TypeSportModal = ({ open, onClose, onContinue }) => {
    const classes = useStyles(); // Подключение стилей

    const [selectedSports, setSelectedSports] = useState([]);

    const handleButtonClick = (sportLabel) => {
        setSelectedSports(prevSelectedSports => {
            if (prevSelectedSports.includes(sportLabel)) {
                return prevSelectedSports.filter(label => label !== sportLabel);
            } else {
                return [...prevSelectedSports, sportLabel];
            }
        });
    };

    const handleContinue = () => {
        onContinue();
    };

    const sports = [
        { img: velosport, label: 'Велоспорт' },
        { img: gandboll, label: 'Гандбол' },
        { img: konki, label: 'Коньки' },
        { img: sambo, label: 'Самбо' },
        { img: wrestling, label: 'Борьба' },
        { img: atletika, label: 'Атлетика' },
    ];

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="type-sport-modal-title"
            aria-describedby="type-sport-modal-description"
        >
            <Box className={classes.typeSportModal}>
                <Typography component="h3" variant="h6" sx={{ color: '#06082C', fontSize: 30, fontWeight: "bold" }}>
                    Выберите вид спорта
                </Typography>
                <Box className={classes.imageGrid}>
                    {sports.map((sport, index) => (
                        <Box key={index} className={classes.imageBox}>
                            <img
                                src={sport.img}
                                alt={sport.label}
                                className={classes.image}
                                style={{ opacity: selectedSports.includes(sport.label) ? 1 : 0.5 }}
                            />
                            <Button
                                sx={{
                                    position: 'absolute',
                                    bottom: 10,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#FFFFFF',
                                    color: '#06082C',
                                    width: 99,
                                    height: 34,
                                    borderRadius: 100,
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#F1F3F7',
                                    },
                                }}
                                onClick={() => handleButtonClick(sport.label)}
                            >
                                {sport.label}
                            </Button>
                        </Box>
                    ))}
                </Box>
                <Box className={classes.actionButtons}>
                    <Button className={`${classes.actionButton} ${classes.skipButton}`} onClick={onClose}>
                        Пропустить
                    </Button>
                    <Button className={`${classes.actionButton} ${classes.continueButton}`} onClick={handleContinue}>
                        Продолжить
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default TypeSportModal;
