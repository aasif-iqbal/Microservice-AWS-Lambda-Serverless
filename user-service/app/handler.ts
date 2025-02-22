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

const Login = async (event: APIGatewayProxyEventV2) => {
  try{    
    const body = JSON.parse(event.body);
    console.log(event);

    return {
      statusCode: 200,
      body: JSON.stringify({
          message: 'Login Successfully',
          input: event,
      }),
    }
  }catch(error){
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error", error }),
    };
  }        
}

export {
    Signup,
    Login
  }