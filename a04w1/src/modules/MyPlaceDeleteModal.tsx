import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const MyPlaceDeleteModal:React.FC<{open:boolean, handleClose:Function, handleConfirm:Function}> = ({open, handleClose, handleConfirm}) => {
    return(
        <Dialog open={open} onClose={()=>handleClose()}>
            <DialogTitle>Delete listing?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this listing? This action cannot be reversed?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>handleClose()}>Cancel</Button>
                <Button onClick={()=>handleConfirm()}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
};

export default MyPlaceDeleteModal;