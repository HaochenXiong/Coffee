//CoffeeTawk — by 'Haochen Xiong' — applab, lab 1, 2018

/*
Challenge 1:

1 We have a larger demand here in Shanghai
2 our stores don’t operate as efficiently
3 The lines are long
4 It takes a minute or more to take an order
5 It takes 5 minutes for customer to walk out the door with their beverage
6 Payment is quick
7 Most people use AliPay or WeChat Pay
8 The order-taking process is slow
9 Our baristas are fast
10 Baristas struggle to keep up with making drinks and handling customer questions
11 Most people know what they want before they even walk in the store
12 There are still a lot of people that just stand at the register asking questions and holding up the line
13 We’re losing that business
*/

/*
Challenge 2:
Group: 3 The lines are long 
       4 It takes a minute or more to take an order
       5 It takes 5 minutes for customer to walk out the door with their beverage
Thinking: Start timing when a customer start to order
          Record the first time when the payment is done
          Record the second time when the customer walks out
          Take 50 samples, calculate the average of both order time and the whole time, then analyze
 
Group: 6 Payment is qiuck 
       7 Most peopple use Alipay or WeChat Pay
Thinking: Alos take 50 samples, record the way customers pay
          Calculate the proportion of each way
*/

/*
Challenge 3:
