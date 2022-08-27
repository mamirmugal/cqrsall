import { AggregateRoot } from "@nestjs/cqrs";
import { StudentEvent } from "./cqrs/student.event";

export class StudentModel extends AggregateRoot {
  constructor(private id: string) {
    super();
  }

  /**
   * Calling event
   * @param studentData 
   */
  callEvent(studentData: any) {
    // logic
    this.apply(new StudentEvent(studentData?.name, studentData?.address, studentData?.phone));
  }
}