# Store and Reply Demo

## What is that?
This demo is a super simple app that expose an API that get 2 variables ```user``` and ```message```, executes a Lambda function that based on the ```message``` variable detects the variable language using Amazon Comprehend an reply to the user in the same language, using Amazon Translate.

The data of the request is being stored in DynamoDB.
