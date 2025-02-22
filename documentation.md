Resale product portal (like ebay) C2C

Need to build a web application which can facilitate the buy, sale new & used/old products in certain price range. Where seller can post products and advertise it for sale and guyer can search and view product as per choice and buy it online.
Application should provide features to talk to buyer with seller directly without mediator and buy the products by paying the price. Payment system will collect the money of the product and certain % of the final product price will be hold for platform and rest of will be release to seller. Buyer can rate the experience of purchase, seller, delivery etc. The communications of every process will be notify through sms and email notification.

### Flow
```txt
https://whimsical.com/nodejs-microservice-with-sls-U8x7rhE232reoZEVhH6RrR
```

1. install serverless (v3 recommended for typescript support, v4 uses bundler)

```lua

```
2. install aws cli
```lua
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

https://awscli.amazonaws.com/AWSCLIV2.pkg

> which aws
/usr/local/bin/aws

> aws --version
aws-cli/2.19.1 Python/3.11.6 Darwin/23.3.0 botocore/2.4.5
```
3. Go to your project dir. and type `sls`
- What do you want to make? AWS - Node.js - HTTP API
- What do you want to call this project? user-service
- skip ...

4. 
```lua
cd user-service
```
5. Check for typescript 
```lua
tsc -v

-- or
install typescipt -g
```
6. 
```lua
npm init -y
```

7.
```lua
-- Run the following command to change ownership of the .npm directory
sudo chown -R $(whoami) ~/.npm

npm cache clean --force

sls plugin install --name serverless-offline
-- or
serverless plugin install --name serverless-offline
```
8.
```lua
sls plugin install --name serverless-plugin-typescript
```

9.
```lua
tsc --init
```

10.
```lua
npm install --dev typescript ts-node
npm install aws-lambda
npm install --dev @types/aws-lambda
```

## Recommended - step 7
```lua
serverless plugin install -n serverless-offline

npm install --save-dev serverless-plugin-typescript serverless-offline --legacy-peer-deps
```

