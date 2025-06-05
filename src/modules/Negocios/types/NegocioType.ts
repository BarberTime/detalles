export interface NegocioType {
  id_negocio: string;
  nombre: string;
  usuario: UsuarioType;
  descripcion: string;
  departamento: string;
  direccion: string;
  latitud: string;
  longitud: string;
  telefono: string;
  logo: string;
  foto: string;
  fecha_registro: string;
}

export interface UsuarioType {
  id: number;
  username: string;
  email: string;
}

export interface HorarioType {
  id_horario: string;
  negocio: string;
  dia: string;
  hora_inicio: string;
  hora_fin: string;
}

export interface ServicioType {
  id_servicio: string;
  nombre: string;
  negocio: string;
  categoria: string;
  precio: string;
  descripcion: string;
  duracion: number;
  imagen: string;
  fecha_registro: string;
}
