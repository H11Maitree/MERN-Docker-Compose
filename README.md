# Docker Compose MERN Stack Project Template

## Microservices 
- React JS (Frontend)
- Express (Backend)
- Enginx (Reverse Proxy)
- MogoDB (Database)

## Useful Command

Build Up
```sh
docker compose up --build --wait
```

Run Watch for Development (Needed to be build and running)
```sh
docker compose alpha watch
```

Clear Cache (When the Docker memory is full)
```sh
docker system prune
```

## Usecase Example
In the home page React app, we have added a test button to demonstrate React calling express API: 
| API | Description |
| ------ | ------ |
| /api/currentTime | return server dateTime |

Once the user clicks the button, it will fetch the API and display it in React.
