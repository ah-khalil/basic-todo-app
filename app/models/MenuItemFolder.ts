import { MenuItemBase } from "./MenuItemBase";

export class MenuItemFolder extends MenuItemBase{
    public constructor(label: string){
        super(label);
        this.children = [];
    }

    public add_child(child: MenuItemBase): void{
        this.children.push(child);
        child.set_parent(this);
    }

    public remove_child(child: MenuItemBase): void{
        let child_index = this.children.indexOf(child);
        this.children.splice(child_index, 1);
        child.set_parent(undefined);
    }

    public override is_composite(): boolean {
        return true;
    }
}