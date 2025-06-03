
# API Documentation

## Endpoints

### Health Check
- **URL**: `/api/health`
- **Method**: `GET`
- **Description**: Check the health status of the API service
- **Response**:
  ```json
  {
    "status": "healthy",
    "timestamp": "2025-06-03T04:19:45.610Z"
  }
  ```

### Authentication
- **URL**: `/api/auth`
- **Method**: `POST`
- **Description**: Authenticate a user
- **Request Body**:
  ```json
  {
    "username": "string (min 3 characters)",
    "password": "string (min 6 characters)"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Authentication successful",
    "token": "string"
  }
  ```
- **Error Response**:
  ```json
  {
    "success": false,
    "message": "Invalid username. Username must be at least 3 characters long."
  }
  ```

### Create Transaction
- **URL**: `/api/transactions`
- **Method**: `POST`
- **Description**: Create a new transaction
- **Request Body**:
  ```json
  {
    "amount": "number (positive)",
    "currency": "string (3 characters)",
    "description": "string (min 3 characters)"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "transactionId": "string",
    "amount": "number",
    "currency": "string",
    "description": "string",
    "timestamp": "string (ISO date)"
  }
  ```
- **Error Response**:
  ```json
  {
    "success": false,
    "message": "Invalid amount. Amount must be a positive number."
  }
  ```

### Transaction History
- **URL**: `/api/transactions/history`
- **Method**: `GET`
- **Description**: Get transaction history
- **Response**:
  ```json
  {
    "transactions": [
      {
        "id": "string",
        "amount": "number",
        "currency": "string",
        "description": "string",
        "timestamp": "string (ISO date)"
      }
    ]
  }
  ```

## Error Handling

All endpoints may return a 500 error response in case of server errors:
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

## Validation Rules

### Transaction Validation
- Amount must be a positive number
- Currency must be a 3-letter code (e.g., USD)
- Description must be at least 3 characters long

### Authentication Validation
- Username must be at least 3 characters long
- Password must be at least 6 characters long
