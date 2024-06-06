import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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

const AnketaModal = ({ open, onClose }) => {
    const classes = useStyles();

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="anketa-modal-title"
            aria-describedby="anketa-modal-description"
        >
            <Box className={classes.modalContent}>
                <Typography variant="h5" gutterBottom>
                    Заполните анкету
                </Typography>
                <Button className={classes.button} onClick={onClose}>Закрыть</Button>
            </Box>
        </Modal>
    );
};

export default AnketaModal;
