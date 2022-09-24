import React, { useEffect, useRef, useState } from 'react';

// components
import { Box, Button, TextField } from '@mui/material';

// clients
import { UserControllerService } from 'services/UserClient';

// types
import { User } from 'generated-sources/openapi';

// styles
import styles from './styles.scss';

const App = () => {
    const [users, setUsers] = useState<Array<User> | null>(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const abortControllerRef = useRef<AbortController>();

    useEffect(() => {
        abortControllerRef.current = new AbortController();

        UserControllerService.getUsers({
            signal: abortControllerRef?.current?.signal,
        }).then((response) => setUsers(response));

        return () => abortControllerRef?.current?.abort();
    }, []);

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '20ch' },
                    '&': { display: 'flex' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="first-name-input"
                    label="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                />
                <TextField
                    required
                    id="last-name-input"
                    label="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />
                <Button
                    onClick={() => {
                        UserControllerService.addUser({
                            firstName: firstName,
                            lastName: lastName,
                        }).then((response) => {
                            setUsers(response);
                            setFirstName('');
                            setLastName('');
                        });
                    }}
                    disabled={!firstName || !lastName}
                >
                    Add
                </Button>
            </Box>
            {users?.map((user) => (
                <div key={user.id}>
                    <div className={styles['name']}>
                        {`${user.firstName} ${user.lastName}`}
                        <Button
                            onClick={() => {
                                UserControllerService.deleteUser({
                                    firstName: user.firstName,
                                }).then((response) => setUsers(response));
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default React.memo(App);
