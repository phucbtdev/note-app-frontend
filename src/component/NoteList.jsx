import { Card, CardContent, Grid, List, ListItem, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const ListNote = () => {
    const { noteId } = useParams()
    const [activeNote, setActiveNote] = useState(noteId)
    const notes = [
        { id: '1', note: 'no dangerousl dangerouslySetInnerHTMLySet dangerouslySetInnerHTMLInnerHTMLte' },
        { id: '2', note: 'no dangerousl dangerouslySetInnerHTMLySet dangerouslySetInnerHTMLInnerHTMLte' },
    ]
    return (
        <>
            <Grid container height={'100%'} >
                <Grid item xs={4}
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: '#F0EBE3',
                        height: '100%',
                        fontWeight: 'bold',
                        overflowY: 'auto',
                        padding: '10px',
                        textAlign: 'left',
                    }}
                >
                    <List
                        sx={{
                            overflowY: 'auto',
                        }}

                        subheader={
                            <Box>
                                <Typography sx={{
                                    fontWeight: 'bold'
                                }} >
                                    Notes
                                </Typography>
                            </Box>
                        }
                    >
                        {notes.map(({ id, note }) => {
                            return (

                                <Link
                                    key={id}
                                    to={`note/${id}`}
                                    style={{ textDecoration: 'none', }}
                                    onClick={() => setActiveNote(id)}
                                >
                                    <Card
                                        sx={{
                                            cursor: 'pointer',
                                            mb: '10px',
                                            bgcolor: id == activeNote ? 'rgb(255 211 140)' : null
                                        }}
                                    >
                                        <CardContent
                                            sx={{ '&:last-child': { pb: '10px' }, padding: '10px' }}
                                        >
                                            <div
                                                style={{ fontSize: 14, fontWeight: 'bold' }}
                                                dangerouslySetInnerHTML={{
                                                    __html: `${note.substring(0, 30) || 'Empty'}`,
                                                }}
                                            />
                                        </CardContent>
                                    </Card>
                                </Link>
                            )
                        })}

                    </List>
                </Grid>

                <Grid item xs={8}>
                    <Outlet></Outlet>
                </Grid>
            </Grid>
        </>
    );
}

export default ListNote;
