import {Outlet, useSearchParams} from 'react-router-dom'

const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const showFilter = searchParams.get('filter') === 'active';
    return(
        <div>
            {showFilter ? <h2>Show Active User</h2> : <h2>Show All User</h2>}
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
            <Outlet />
            <button onClick={() => setSearchParams({filter: 'active'})}>Active users</button>
            <button onClick={() => setSearchParams({})}>Clear Filter</button>
        </div>
    )
}

export default User;