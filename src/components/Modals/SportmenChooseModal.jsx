import { Box, Typography, Modal, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    modalContent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#FFFFFF',
        boxShadow: 24,
        padding: 20,
        borderRadius: 16,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
    },
});

const SportmenChooseModal = ({ open, onClose }) => {
    const classes = useStyles();



    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="sportmen-choose-modal-title"
                aria-describedby="sportmen-choose-modal-description"
            >
                <Box className={classes.modalContent}>
                    <Typography variant="h5" gutterBottom>
                        Выберите спортсмена
                    </Typography>
                    <Button className={classes.button} onClick={onClose}>Закрыть</Button>
                    <Button className={classes.button} >Продолжить</Button>
                </Box>
            </Modal>
        </>
    );
};

export default SportmenChooseModal;