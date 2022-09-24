import React, { useEffect, useRef, useState } from 'react';
import { User } from 'generated-sources/openapi';

// clients
import { UserControllerService } from 'services/UserClient';

// styles
// import style from './styles.scss';

const App = () => {
    const [users, setUsers] = useState<Array<User> | null>(null);
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
            {users?.map((user) => (
                <div key={user.id}>
                    <span className="mr-2">{user.firstName}</span>
                    <span>{user.lastName}</span>
                </div>
            ))}
        </>
    );
};

export default React.memo(App);
