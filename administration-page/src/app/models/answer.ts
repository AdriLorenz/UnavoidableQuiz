export class Answer {
  constructor(
    $answer_id: number,
    $answer_content: string,
    $answer_status: boolean,
    $id_question: number
  ) {
    this.answer_id = $answer_id;
    this.answer_content = $answer_content;
    this.answer_status = $answer_status;
    this.id_question = $id_question;
  }

  public answer_id: number;
  public answer_content: string;
  public answer_status: boolean;
  public id_question: number;
}
