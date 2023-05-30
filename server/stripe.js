import stripe from "stripe"
const secretKey='sk_test_51MYw4aL4AlFFiyI0KBnD3Tb4QN4xGzX85XQNH252qvb07K05MrAEgHblyOkssyHLXlqOTVqnpfH6lvhj0KrLtPGw004CO6FAOS'


const Stripe= stripe(secretKey,{
    apiVersion:'2022-11-15'
}) 

//add a new cutomer to stripe dashboard
const addNewCutomer=async (email)=>{
    const customer= await Stripe.customers.create({
        email,
        description:"Escaff customer"
    
    })
    return customer
}
const createCheckoutSession=async(customer,product)=>{
    const session = await Stripe.checkout.sessions.create({
        mode:"test",
        payment_method_types:['card'],
        customer,
        line_items:[
            {
                product,
                quantity:1 
            }
        ],
        //free trial
        subscription_data:{
            trial_period_days:30
        },
        success_url:"http://localhost:3000?session_id={CHECKOUT_SESSION_ID}",
        cancel_url:"http://localhost:3000/login?session_id={CHECKOUT_SESSION_ID}"
    })
    return session 
}
export default addNewCutomer
