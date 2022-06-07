import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    bgcolor: 'background.paper',
    boxShadow: 2,
    p: 2,
};

export default function CreateModal({ open, setOpen })
{
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Typography id='modal-modal-title' variant='h6' component='h2'>
                        Create a new document:
                    </Typography>

                    <div className='form-floating mb-3'>
                        <input placeholder='Add a Title' id='title' className='my-2 form-control' />
                        <label for='title'>Title</label>
                    </div>

                    <center>
                        <button className='btn btn-sm btn-primary'>
                            Create
                        </button>
                    </center>
                </Box>

            </Modal>
        </div>
    );
}
