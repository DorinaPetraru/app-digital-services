TÍTULO
Digital Services

DESCRIPCIÓN
Implementar una API que permita gestionar una web donde personas que necesiten algún
servicio digital puedan pedir ayuda a otros usuarios (estilo Fiverr). Por ejemplo: traducir un
texto, editar una foto, revisar un documento, etc... Solo necesidades que puedan realizarse
mediante un fichero digital.

USUARIO ANÓNIMO:
● Ver lista de servicios requeridos
● Login (Email y Password)
● Registro (Nombre, Email, Biografía, Foto, ...)

USUARIOS REGISTRADOS:
● Crear un nuevo servicio requerido
○Título
○Explicación
○Fichero
● Escoger un servicio requerido por otro usuario y poder:
○Hacer comentarios
○Subir un fichero con el trabajo requerido realizado
● Marcar un servicio requerido como ya resuelto
● Opcional
○Gestión del perfil de usuario (Nombre, Email, Biografía, Foto, ...)

# Tablas

Tabla de users:
id
nombre
email
biografia
foto
password
fechaCreacion
fechaModificacion (solo si se va a llevar a cabo la parte opcional de gestionar perfil de usuario)

Tabla de servicios:
id
titulo
descripcion
fichero
resolved (true-false) --> o también podéis llamarle status y que sea de tipo Enum con las opciones "pending" o "resolved".
idUsers
fechaCreación

Tabla de comentarios:
id
idUser
idServicio
texto
fichero (opcional)
fechaCreación

# Endpoint Users

-   **POST[/users]** - registro de usuarios ✅
-   **POST [/login]** Login de usuario (devuelve token)✅
-   **GET [/users/:id]** Devuelve información de usuario ✅

-   **DELETE[/users/:id]**Borra un usuario
-   **PUT[/users/:id]**Modifica un usuario

# Endpoints services

-   **GET [/services]** Lista todos los servicios✅
-   **POST [/services]** Permite crear un servicio✅
    (necesita llevar titulo, explicacion y fichero)

-   **DELETE [/services/:id]** Borra un servicio sólo si eres quien lo creó

# Endpoints usuarios registrados

-   **PUT-[/services/:idService/request]**--- solicitar un servicio especifico
    (le tenemos status enum ,por defecto "pending" ----- cafeteria)
    (puede llevar comentario y fichero)
-   **PUT-[/services/:idService/request/resolved]**--finalizar un servicio y marcar como resuelto(el status cambia a resolved)

Opcional : con el token que pueda gestionar sus datos del perfil
