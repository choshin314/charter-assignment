# Retail Customer Points & Transactions

This is a coding project completed pursuant to the prompt below.  


>
> A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
> A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
>
> Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.
>
> - Preferably use React JS and ~~Spring Boot~~ Node (went with Node as I do not know Java/Spring Boot)
> - Make up a data set to best demonstrate your solution
>

## Running the App Locally

To run locally in development mode:

    \# Run backend
    npm run dev

    \# Run frontend 
    cd client
    npm start

## Front End Summary

The front end was built with React, React Router, and React-Bootstrap UI components. 

The default view displays a scrollable table of all customers.  More customers are loaded as you scroll down. 

Search is also available if you want to search for a specific customer by name instead of scrolling through the entire table. 

Clicking any customer row will open a modal with the given customer's transaction/point history displayed by month or by transaction. 

## Back End Summary

Unfortunately I have yet to learn Java so I was unable to follow the prompt for the back end.  However, I did implement an API with Node and Express. 

For the dataset, I just used [Mockaroo](https://www.mockaroo.com/) to generate mock data for 100 customers and 2000 transactions in JSON format.

The "models" are not super fleshed out; they simply contain the functions needed to complete mock "queries" on the datasets as required per the assignment.

There is only one environment variable needed for the backend (and the entire project), and really only required if you deploy (and may be set by default depending on the service):

    NODE_ENV=production

## Deploy

The demo was deployed to Heroku.  The heroku-postbuild script will see to the execution of the frontend build at deployment.  

