import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { bookingData } from "../types/data";

const ReservationConfirmModal:React.FC<{booking:bookingData, handleConfirm:Function, open:boolean, handleClose:Function}> = ({booking, handleConfirm, open, handleClose}) => {
    return(
        <Dialog open={open} onClose={()=>handleClose()}>
            <DialogTitle>Confirm booking</DialogTitle>
            <DialogContent>
                {booking.accomodation!==null && 
                <DialogContentText>
                    <p>{booking.accomodation.title}</p>
                    <p>{booking.personCount}</p>
                    <p><>{booking.checkIn}-{booking.checkOut}</></p>
                    <p>{booking.accomodation.type}</p>
                    <p>{booking.accomodation.location!==null?booking.accomodation.location.name:null}</p>
                    <p>EUR{booking.accomodation.price}</p>
                </DialogContentText>}
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>handleClose()}>CANCEL</Button>
                <Button onClick={()=>handleConfirm()}>CONFIRM</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ReservationConfirmModal;