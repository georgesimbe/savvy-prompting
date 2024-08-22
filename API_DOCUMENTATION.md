# Savvy Prompting API Documentation

## Base URL

All API requests should be made to: `http://localhost:5000/api`

## Authentication

Some endpoints require authentication. To authenticate, include the `x-auth-token` header in your request with a valid JWT token.

## Endpoints

### Auth

#### Register a new user

- **URL:** `/auth/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Success Response:** 
  - **Code:** 201
  - **Content:** `{ "token": "JWT_TOKEN" }`

#### Login

- **URL:** `/auth/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Success Response:** 
  - **Code:** 200
  - **Content:** `{ "token": "JWT_TOKEN" }`

### Prompts

#### Get all prompts

- **URL:** `/prompts`
- **Method:** `GET`
- **Headers:** `x-auth-token: JWT_TOKEN`
- **Success Response:** 
  - **Code:** 200
  - **Content:** Array of prompt objects

#### Create a new prompt

- **URL:** `/prompts`
- **Method:** `POST`
- **Headers:** `x-auth-token: JWT_TOKEN`
- **Body:**
  ```json
  {
    "content": "string",
    "analysis": {
      "tokens": "number",
      "clarity": "number"
    }
  }
  ```
- **Success Response:** 
  - **Code:** 201
  - **Content:** Created prompt object

### PromptBench

#### Evaluate prompts

- **URL:** `/promptbench/evaluate`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "prompts": ["string"]
  }
  ```
- **Success Response:** 
  - **Code:** 200
  - **Content:** Array of evaluation results

## Error Responses

- **Code:** 400 BAD REQUEST
  - **Content:** `{ "error": "Error message" }`

- **Code:** 401 UNAUTHORIZED
  - **Content:** `{ "error": "No token, authorization denied" }`

- **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ "error": "Something went wrong" }`

## Rate Limiting

The API is rate limited to 100 requests per 15 minutes per IP address.