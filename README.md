
# Steps

## Frist we need to have a db working
- add typeorm to the system with sqllite `yarn add @nestjs/typeorm typeorm sqlite3`
- secondly create `student` entity file
- add the typeorm configuration to module
- inject studentRepository into service class
- create get and add functionality
- test get and add functionality


## CQRS - command and event
- sending out command from service with command `this.commandBus.execute(new StudentCommand))`
- this will be handled by `StudentCommandHandler` class which can also send out event 
- event can be dispatched by `this.eventBus.publish(new StudentEvent))`
- this can be listened by `StudentSagas` which will listend to `StudentEvent` event 
- then it will be call `BooksCommand` to run different command 


## Query 
- in service we call query `this.queryBus.execute(new StudentQuery())`
- and `GetStudentHandler` to handle the query