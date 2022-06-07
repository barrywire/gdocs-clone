import React, { useState } from 'react';

// Component import
import CreateModal from './modal';

export default function Docs()
{
    // Define the open and set open states
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <main className='p-2'>
            <div className='text-center'>
                <h1 className='inter-sbold'>Docs Clone</h1>
            </div>

            <button className='btn btn-sm btn-primary' onClick={handleOpen}>
                Create a document
            </button>

            <CreateModal open={open} setOpen={setOpen} handleClose={() => setOpen(false)} />

        </main>
    )
}
