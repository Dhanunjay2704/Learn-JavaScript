
// HTTP Requests & HTTP Responses
/*
It works on a request response model where the client sends a request and the server sends a response.
Client → Request → Server
Server → Response → Client

An HTTP request is a message sent by the client to perform an action on the server.

HTTP Request
 ├─ Start Line
 ├─ Headers
 └─ Body


 Start line - 
    URL
    HTTP Method
    HTTP Version

    https://example.com/products?type=mobile



HTTP methods defines - what action that client wants to perform

| Method | Action | Meaning               |
| ------ | ------ | --------------------- |
| GET    | Read   | Get resource          |
| POST   | Create | Send data to server   |
| PUT    | Update | Replace existing data |
| DELETE | Delete | Remove resource       |


HTTP version - defines the version of protocol used for communication
| Year | Version  |
| ---- | -------- |
| 1991 | HTTP/0.9 |
| 1994 | HTTPS    |
| 1996 | HTTP/1.0 |
| 1997 | HTTP/1.1 |
| 2015 | HTTP/2   |
| 2019 | HTTP/3   |

Higher version - better performance




HEADERS - it pass the additonal information between client and server
Content type
Authorization
Accept type

It contains metadata about the request


BODY - Request body contains the data sent to the server


HTTP Request
 ├─ Start Line
 │   ├─ URL
 │   ├─ Method (GET, POST, PUT, DELETE)
 │   └─ Version
 ├─ Headers
 └─ Body






HTTP RESPONSES - It contains a message sent by the server for a clients request. 
HTTP Response
 ├─ Status Line
 ├─ Headers
 └─ Body

 🔹 Status Line specifies:

        HTTP version
        Status code
        Status text

STATUS CODE SERIES
| Series | Meaning      |
| ------ | ------------ |
| 1XX    | Information  |
| 2XX    | Success      |
| 3XX    | Redirection  |
| 4XX    | Client Error |
| 5XX    | Server Error |

COMMON STATUS CODES
| Code | Meaning           |
| ---- | ----------------- |
| 200  | Success           |
| 201  | Created           |
| 204  | No Response       |
| 301  | Moved Permanently |
| 401  | Unauthorized      |
| 403  | Forbidden         |
| 404  | Not Found         |


RESPONSE BODY - it contains the resource data requested by the client.

*/
