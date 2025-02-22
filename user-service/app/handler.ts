import {APIGatewayProxyEventV2} from "aws-lambda";

const Signup = async (event: APIGatewayProxyEventV2) => {
    console.log('----------------start----------------')
    console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v2.0! Your function executed successfully!',
            input: event,
        }),
    }
}   

export {Signup}