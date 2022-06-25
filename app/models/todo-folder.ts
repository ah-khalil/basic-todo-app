import { NONE_TYPE } from "@angular/compiler";

export class TodoFolder {
    label: string;
    parent: TodoFolder | null;
    children: Array<TodoFolder>;

    public constructor(label: string){
        this.label = label;
        this.parent = null;
        this.children = [];
    }

    public add_child(child: TodoFolder): void{
        this.children.push(child);
        child.set_parent(this);
    }

    public remove_child(child: TodoFolder): void{
        let child_index = this.children.indexOf(child);
        this.children.splice(child_index, 1);
        child.set_parent(null);
    }

    private set_parent(parent: TodoFolder | null): void{
        this.parent = parent;
    }

    public get_parent(): TodoFolder | null{
        return this.parent;
    }

    public is_composite(): boolean {
        return this.children.length > 0;
    }
}
