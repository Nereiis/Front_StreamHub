export interface UsersI{
    _id: string;
    Icono: string;
    Username: string;
    Email: string;
    Password: string;
    Favoritos: string[];
    Role: string;
}

export interface CapitulosI{
    _id: string;
    Icono: string;
    Nombre: string;
    Duracion: number;
    Temporada: number;
    Descripcion: string;
}

export interface ResenasI{
    _id: string;
    Username: UsersI;
    Titulo: string;
    Comentario: string;
    Valoracion: number;
}

export interface SeriesI{
    _id: string;
    Portada: string;
    Nombre: string;
    Trailer: string;
    Genero: string[];
    Descripcion: string;
    Capitulos: CapitulosI[];
    Valoracion: number;
    Reseña: ResenasI[];
}


export interface LibrosI{
    _id: string;
    Portada: string;
    Nombre: string;
    Autor: string;
    Genero: string[];
    Descripcion: string;
    Valoracion: number;
    Reseña: ResenasI[];

}

export interface PeliculasI{
    _id: string;
    Portada:string,
    Nombre:string,
    Trailer: string,
    Duracion: number,
    Año: number,
    Genero:string[],
    Descripcion:string,
    Valoracion:number,
    Reseña: ResenasI[],
    }

