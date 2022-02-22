import {useNavigate} from 'react-router-dom';

const OrderSummary = (props) => {
    const navigate = useNavigate();

    console.log(props)

    return(
        <>
            <div>Order Confirmed</div>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    )
}

export default OrderSummary;