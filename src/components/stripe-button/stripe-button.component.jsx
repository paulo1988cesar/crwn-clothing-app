import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {

    const realPrice = Number((price).toFixed(2))    
    const priceForStripe = realPrice  * 100
    const publishableKey = 'pk_test_QOvF0UEGCxO4jDUQj0Sf0ysN00Ne7gNykn';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfully');
    }

    return (
        
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${realPrice}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
   );
}

export default StripeCheckoutButton;