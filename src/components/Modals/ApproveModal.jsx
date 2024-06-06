import React, { useState } from 'react';
import { Box, Typography, Modal, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TypeSportModal from "../Modals/typeSportModel.jsx";
import SportmenChooseModal from "../Modals/SportmenChooseModal.jsx";

const useStyles = makeStyles({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 370,
        height: 513,
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
    square: {
        width: 40,
        height: 40,
        backgroundColor: '#F1F3F7',
        borderRadius: 10,
        margin: '0 5px',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        border: '2px solid #F1F3F7',
    },
    invalidBorder: {
        border: '2px solid red',
    },
    input: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        border: 'none',
        background: 'none',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        outline: 'none',
    },
});

const ApproveModal = ({ open, onClose }) => {
    const classes = useStyles();
    const [code, setCode] = useState(Array(6).fill(''));
    const [valid, setValid] = useState(true);
    const [loading, setLoading] = useState(false);
    const [showTypeSportModal, setShowTypeSportModal] = useState(false);
    const [showSportmenChooseModal, setShowSportmenChooseModal] = useState(false);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
            setValid(true);
            if (value && index < 5) {
                document.getElementById(`code-input-${index + 1}`).focus();
            }
        } else {
            setValid(false);
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            document.getElementById(`code-input-${index - 1}`).focus();
        }
    };

    const handleConfirm = () => {
        if (code.join('').length === 6) {
            setLoading(true);
            // Симуляция вызова API
            setTimeout(() => {
                console.log('Code entered:', code.join(''));
                setLoading(false);
                setShowTypeSportModal(true);
            }, 2000);
        } else {
            setValid(false);
        }
    };

    const handleContinueTypeSportModal = () => {
        setShowSportmenChooseModal(true); // Устанавливаем showSportmenChooseModal в true
        setShowTypeSportModal(false); // Закрываем TypeSportModal
    };


    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography component="h3" variant="h6" sx={{ color: '#06082C', fontSize: 30, fontWeight: "bold" }}>
                        Подтвердите номер<br /> телефона
                    </Typography>
                    <Typography sx={{ color: '#9395B8', fontSize: 14, mt: 1 }}>
                        Отправим сообщение с 6-ти значным кодом
                        на номер +7  983 540-49-43  <span style={{ color: '#353754', fontWeight: "bold" }}>Изменить</span>
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        {code.map((value, index) => (
                            <Box key={index} className={`${classes.square} ${!valid && classes.invalidBorder}`}>
                                <input
                                    id={`code-input-${index}`}
                                    className={classes.input}
                                    value={value}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    maxLength={1}
                                />
                            </Box>
                        ))}
                    </Box>

                    <Button
                        sx={{
                            my: 2,
                            color: 'white',
                            fontSize: 14,
                            borderRadius: '10px',
                            width: 332,
                            height: 40,
                            backgroundColor: '#06082C',
                            '&:hover': { color: 'black', backgroundColor: '#F1F3F7' },
                            textTransform: 'none',
                        }}
                        onClick={handleConfirm}
                        disabled={loading}
                    >
                        {loading ? '...' : 'Подтвердить'}
                    </Button>
                    <Typography sx={{ color: '#9395B8', fontSize: 14, mt: 4 }}>
                        Отправить снова через 01:00
                    </Typography>
                </Box>
            </Modal>

            <TypeSportModal open={showTypeSportModal} onClose={() => setShowTypeSportModal(false)} onContinue={handleContinueTypeSportModal} />
            <SportmenChooseModal open={showSportmenChooseModal} onClose={() => setShowSportmenChooseModal(false)} />
        </>
    );
};

export default ApproveModal;
