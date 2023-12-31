require("dotenv").config()
const express = require('express')
const cors = require('cors')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express();
const PORT = 8000;

app.use(express.json())
app.use(cors())

app.post('/payment',async(req,res)=>{
    try {
        const {amount} = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'INR',
            payment_method_types: ['card'],
          });

          const clientSecret = paymentIntent.client_secret;
          res.json({
            clientSecret,
          })
        
    } catch (error) {
        console.log(error)
    }
})


app.listen(PORT, ()=>{
    console.log(`Listening on PORT = ${PORT}`)
})