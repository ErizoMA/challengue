export interface Personaje {
  nombre: string;
  altura: string;
  masa: string;
  colorCabello: string;
  colorPiel: string;
  colorOjos: string;
  añoNacimiento: string;
  género: string;
  planetaOrigen: string;
  películas: string[];
  especies: string[];
  vehículos: string[];
  navesEstelares: string[];
  creado: string;
  editado: string;
  url: string;
}

export interface Response {
  message: string;
  result: Personaje;
}

export interface ResponseList {
  message: string;
  result: Personaje[];
}

export interface ResponseCreated {
  message: 'CREATED';
}
