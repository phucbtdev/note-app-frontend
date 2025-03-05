import { Card, CardContent, List, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ListFolders = ({ folders }) => {
    const { olderId } = useParams()
    const [activeFolderId, setActiveFolderId] = useState(olderId);

    return (
        <>
            <List
                sx={{
                    height: '100%',
                    bgcolor: '#7D9D9C',
                    padding: '10px',
                    textAlign: 'left',
                }}

                subheader={
                    <Typography
                        sx={{
                            fontWeight: 'bold'
                        }}
                    >
                        Folders
                    </Typography>
                }
            >
                {folders.map(({ id, folderName }) => {
                    return (
                        <Link
                            key={id}
                            style={{ textDecoration: 'none' }}
                            to={`folders/${id}`}
                            onClick={() => setActiveFolderId(id)}
                        >
                            <Card
                                sx={{
                                    mb: '10px',
                                    bgcolor: id == activeFolderId ? 'rgb(255 211 140)' : null
                                }}
                            >
                                <CardContent
                                    sx={{ '&:last-child': { pb: '10px' }, padding: '10px' }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {folderName}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </List>
        </>
    );
}

export default ListFolders;
