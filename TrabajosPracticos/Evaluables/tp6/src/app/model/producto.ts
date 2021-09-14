export class Producto{
    idVendedor: number;
    descripcion: string;
    icon: string;

    constructor(idVendedor: number, descripcion: string, icon:string) {
        this.idVendedor = idVendedor;
        this.descripcion = descripcion;
        this.icon = icon
    }
}