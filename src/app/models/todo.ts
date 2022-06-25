export class Todo {
    id: number | undefined;
    title: string;
    content: string;
    completed: boolean;
    createdOn: Date;

    public constructor(title: string, content: string){
        this.title = title;
        this.content = content;
        this.completed = false;
        this.createdOn = new Date();
    }
}
