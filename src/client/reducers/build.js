export default (id, status) => ({
    "id": id,
    "title": "Name of the build",
    "project": "web",
    "status": status,
    "trigger": "API",
    "buildNo": 102221,
    "user": {
        "name": "Krishna Kumar",
        "email": "test@test.com"
    },
    "source": {
        "info": "e234578",
        "branch": "ready",
        "repo": {
            "name": "github",
            "icon": "github"
        }
    },
    "steps": [
        {
            "title": "Setup",
            "description": "Setup initiation",
            "status": "success",
            "completed": 10,
            "failed": 0,
            "running": 0,
            "skiped": 0,
            "abort": 0,
            "tasks": [
                {
                    "id": 122345676543,
                    "name": "git clone",
                    "status": "success",
                    "start": 1499513760,
                    "end": 1499513760,
                    "icon": "github"
                },
                {
                    "id": 122345676543,
                    "name": "Install dependancies",
                    "status": "success",
                    "start": 1499513760,
                    "end": 1499513760,
                    "icon": "npm"
                },
                {
                    "id": 122345676543,
                    "name": "Prepare assets",
                    "status": "success",
                    "start": 1499513760,
                    "end": 1499513760,
                    "icon": "prepare"
                },
                {
                    "id": 122345676543,
                    "name": "Pre test Configure ",
                    "status": "success",
                    "start": 1499513760,
                    "end": 1499513760,
                    "icon": "configure"
                }
            ]
        },
        {
            "title": "Testing",
            "description": "Testing the build",
            "status": "success",
            "completed": 10,
            "failed": 0,
            "running": 0,
            "skiped": 0,
            "abort": 0,
            "tasks": [
                {
                    "id": 122345676543,
                    "name": "Unit test",
                    "status": "success",
                    "start": 1499513760,
                    "end": 1499513760,
                    "icon": "unit-test"
                },
                {
                    "id": 122345676543,
                    "name": "Functional Test",
                    "status": "success",
                    "start": 1499513760,
                    "end": 1499513760,
                    "icon": "func-test"
                }
            ]
        },
        {
            "title": "Build Image",
            "description": "Docker build and test",
            "status": "success",
            "completed": 10,
            "failed": 0,
            "running": 0,
            "skiped": 0,
            "abort": 0,
            "tasks": [
                {
                    "id": 122345676543,
                    "name": "Build Docker",
                    "status": "success",
                    "start": 1499513760,
                    "end": 1499513760,
                    "icon": "docker"
                },
                {
                    "id": 122345676543,
                    "name": "Push Docker",
                    "status": "success",
                    "start": 1499513760,
                    "end": 1499513760,
                    "icon": "docker-push"
                }
            ]
        },
        {
            "title": "Message",
            "description": "Docker build and test",
            "status": "success",
            "completed": 10,
            "failed": 0,
            "running": 0,
            "skiped": 0,
            "abort": 0,
            "tasks": [
                {
                    "id": 122345676543,
                    "name": "Slack message",
                    "status": "success",
                    "start": 1499513760,
                    "end": 1499513760,
                    "icon": "slack"
                }
            ]
        }
    ]
});