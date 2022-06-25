export abstract class MenuItemBase {
    public children: Array<MenuItemBase>;
    public parent: MenuItemBase | undefined;
    public label: string;

    protected constructor(label: string){
        this.label = label;
    }

    public set_parent(parent: MenuItemBase | undefined): void{
        this.parent = parent;
    }

    public get_parent(): MenuItemBase | undefined{
        return this.parent;
    }

    public is_composite(): boolean{
        return false;
    }
}