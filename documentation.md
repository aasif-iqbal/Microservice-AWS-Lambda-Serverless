## Setup AWS Lambda for Serverless framework

1. install serverless (v3 recommended for typescript support, v4 uses bundler)

```lua
npm install -g serverless@3

serverless --version
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