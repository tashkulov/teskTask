import React, { useState } from 'react';
import { Box, Typography, Button, Modal, InputAdornment, OutlinedInput } from '@mui/material';
import { makeStyles } from '@mui/styles';
import loginlogo from '../../assets/loginlogo.svg';
import russia from '../../assets/russia.svg';
import ApproveModal from './ApproveModal.jsx';

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
});

const LoginModal = ({ open, onClose, onRegister }) => {
    const classes = useStyles();
    const [openApprove, setOpenApprove] = useState(false);

    const handleOpenApprove = () => {
        setOpenApprove(true);
    };

    const handleCloseApprove = () => {
        setOpenApprove(false);
    };

    const handleRegisterClick = () => {
        onRegister();
        onClose();
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
                    <Box>
                        <img src={loginlogo} alt="Login Logo" />
                        <Typography component="h3" variant="h6" sx={{ color: '#06082C', fontSize: 30, fontWeight: "bold", mt: 2 }}>
                            Вход на платформу
                        </Typography>
                        <Typography sx={{ color: '#9395B8', fontSize: 14, mt: 1 }}>
                            Код будет автоматически отправлен на Ваш номер<br />
                            телефона с помощью SMS
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'start', mt: 2 }}>
                        <Typography sx={{ fontSize: 14, color: '#9395B8', mb: 0.5 }}>Номер телефона</Typography>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    <img src={russia} alt="Russia" />
                                </InputAdornment>
                            }
                            sx={{
                                backgroundColor: '#F1F3F7',
                                borderRadius: '10px',
                                width: 322,
                                height: 40,
                                mb: 2 // Add some margin to the bottom for spacing between input fields
                            }}
                            placeholder="+7"
                        />
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
                            '&:hover': { color: 'black' },
                            textTransform: 'none', // Отключить автоматическое преобразование текста в верхний регистр
                        }}
                        onClick={handleOpenApprove} // Open ApproveModal
                    >
                        Получить код
                    </Button>

                    <Box sx={{ textAlign: 'center', mt: 2 }}> {/* Update textAlign to center */}
                        <Typography sx={{ fontSize: 14, color: '#9395B8', mb: 0.5 }}>Нет аккаунта?</Typography>
                        <Button
                            sx={{
                                color: '#06082C',
                                fontSize: 14,
                                borderRadius: '10px',
                                width: 332,
                                height: 40,
                                backgroundColor: '#F1F3F7',
                                '&:hover': { color: 'black' },
                                textTransform: 'none', // Отключить автоматическое преобразование текста в верхний регистр
                            }}
                            onClick={handleRegisterClick}
                        >
                            Зарегистрироваться
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <ApproveModal open={openApprove} onClose={handleCloseApprove} /> {/* Include ApproveModal */}
        </>
    );
};

export default LoginModal;
