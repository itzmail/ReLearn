import {useParams} from 'react-router-dom'

const UserDetail = () => {
    const params = useParams();

    return(
        <div>User {params.userId} about Detail</div>
    )
}

export default UserDetail;