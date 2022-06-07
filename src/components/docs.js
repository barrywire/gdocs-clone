import React, { useState } from 'react';

// Component import
import CreateModal from './modal';

// Firebase component imports
import { addDoc, collection } from 'firebase/firestore';

export default function Docs({ database })
{
    // Define the close, open and set open states
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // State that will hold data
    const [title, setTitle] = useState('')

    const collectionRef = collection(database, 'docsData')

    // Function that will trigger the add data function
    const addData = () => {
        addDoc(collectionRef, {
            title: title
        })
        .then(() => {
            alert('Data added')
            handleClose()
        })
        .catch(() => {
            alert('Cannot add data')
        })
    }

    return (
        <main className='p-2'>
            <div className='text-center'>
                <h1 className='inter-sbold'>Docs Clone</h1>
            </div>

            <button className='btn btn-sm btn-primary' onClick={handleOpen}>
                Create a document
            </button>

            <CreateModal
                open={open}
                setOpen={setOpen}
                title={title}
                setTitle={setTitle}
                addData={addData}
            />

        </main>
    )
}
