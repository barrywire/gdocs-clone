import React, { useState, useEffect, useRef } from 'react';

// Component import
import CreateModal from './modal';

// Firebase function imports
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

// MUI Component Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Docs({ database })
{
    // Define the close, open and set open states
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // State that will hold data
    const [title, setTitle] = useState('')

    const collectionRef = collection(database, 'docsData')

    // Define the array state that will hold the returned data
    const [docsData, setDocsData] = useState([]);


    // Function that will add data to the database
    const addData = () =>
    {
        addDoc(collectionRef, {
            title: title
        })
            .then(() =>
            {
                alert('Data added')
                handleClose()
            })
            .catch(() =>
            {
                alert('Cannot add data')
            })
    }

    // Function that will get data from the database
    const getData = () =>
    {
        onSnapshot(collectionRef, (data) =>
        {
            setDocsData(data.docs.map((doc) =>
            {
                return { ...doc.data(), id: doc.id }
            }))
        })
    }

    // Remedy to concurrent rendering
    const isMounted = useRef()

    useEffect(() =>
    {
        if (isMounted.current)
        {
            return
        }
        isMounted.current = true;
        getData()
    }, [])

    return (
        <div className='container p-3'>
            <div className='row'>
                <div className='col text-center'>
                    <h2 className='inter-sbold'>Docs Clone</h2>
                </div>

                <div className='col'>
                    <button className='btn btn-sm btn-primary' onClick={handleOpen}>
                        Create a document
                    </button>
                </div>
            </div>

            <CreateModal
                open={open}
                setOpen={setOpen}
                title={title}
                setTitle={setTitle}
                addData={addData}
            />

            <div className='container p-4'>
                <div className='row'>
                    {docsData.map((doc) =>
                    {
                        return (
                            <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                                <Card variant='outlined'>
                                    <CardContent>
                                        <Typography variant='h5'>
                                            {doc.title}
                                        </Typography>
                                        <Typography variant='body2'>
                                            {doc.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

        </div>
    )
}
