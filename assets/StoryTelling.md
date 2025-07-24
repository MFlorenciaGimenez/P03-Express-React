    Estoy haciendo una aplicación para un restaurante de comida asiática.
    La idea es que los usuarios puedan reservar una mesa para comer en el local. No hay límite de personas ni de mesas. La consigna va a ser crear una landing page muy sensilla y permitir al usuario registrarse para que una vez hecho esto, pueda reservar una mesa, ver sus turnos, etc.

Dicho esto, vamos a diferenciar dos tipos de usuarios: invitado y usuario logeado.
1-Como invitado:
\*Puedo ver la página de inicio con info del restaurante, sus horarios y un poco de lo que puede experimentar.

\*No puedo reservar nada si no tengo una cuenta.

\*Tengo botones para registrarme o iniciar sesión. Esto se va a lograr con sus respectivos formularios.

2-Como usuario logeado: puedo reservar una mesa y ver mis reservas. Tambien voy a crear un boton para poder cancelarlas.

Mi base de datos va a consistir en 3 entidades: user, credential y appointments(esta ultima, la voy a llamar en mi codigo Reservation pues tiene mas sentido en el contexto de un restaurant).
La relacion y las propiedades van a ser explicitas en mi diagrama entidad relacion adjunto en este mismo folder.
