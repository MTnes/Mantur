export class Request {

  public clientID: string;
  public clientName: string;
  public userID: string;
  public status: string;
  public attachments: { link: string, fileName: string }[] = [];
  public requestVideo: string;
  public answerVideo: string;
  public requestText: string;
  public answerText: string;
  public requestedOn: string;
  
}
