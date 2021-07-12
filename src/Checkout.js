import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {

    const [{basket} ]=useStateValue();
    return (
        <div className="checkout">
                <div className="checkout__left">
                    <a href="https://www.amazon.in/b?node=26297682031&pf_rd_r=DQPJSPG3B4XQ6ECFGMQ3&pf_rd_p=64f36d70-0b17-4d16-b155-a8167dc13269&pd_rd_r=73055fd9-5b9d-4cbb-9201-8d4b765823d8&pd_rd_w=ksOlD&pd_rd_wg=ONkwz&ref_=pd_gw_unk"
                target="_blank" rel="noreferrer">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg"
                        alt="ad"
                        className="checkout__ad"
                        />
                </a>

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your basket is empty</h2>
                        <p>You have no items in your basket. To add an item, click "Add to basket" button underneath the item.</p>
                    </div>
                        ) : (
                            <div>
                                <h2 className="checkout__title">Your shopping basket</h2>
                                {basket.map(item => (
                                    <CheckoutProduct 
                                        id= {item.id} 
                                        title= {item.title}
                                        price= {item.price}
                                        rating= {item.rating}
                                        image= {item.image}
                                    />
                                ))}
                            </div>
                        )

                }
        </div>
        {basket.length>0 && (
            <div className="checkout__right">
                <Subtotal />
            </div>
        )}
            
        </div>
    );
}

export default Checkout;
