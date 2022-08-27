import { Injectable } from "@nestjs/common";
import { ICommand, ofType, Saga } from "@nestjs/cqrs";
import { map, Observable } from "rxjs";
import { BooksCommand } from "./books.command";
import { StudentEvent } from "./student.event";

@Injectable()
export class StudentSagas {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(StudentEvent),
      map((event) => new BooksCommand(event.name + " book")),
    );
  }
}