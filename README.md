Amigo Secreto 🎁

¡Bienvenido a la aplicación de Amigo Secreto! Esta herramienta te permite organizar un sorteo aleatorio entre tus amigos. Simplemente ingresa los nombres, y la aplicación seleccionará al azar quién será el amigo secreto de cada uno.

Funcionalidades 🚀
1. Agregar Nombres

    Ingresa el nombre de un amigo en el campo de texto y haz clic en "Añadir" o presiona Enter.

    El nombre se agregará a la lista visible en la página.

    Validaciones:

        No se permiten nombres vacíos.

        No se permiten nombres repetidos.

2. Lista de Nombres

    Los nombres ingresados se muestran en una lista debajo del campo de texto.

    Puedes agregar tantos nombres como desees.

3. Sortear Amigo Secreto

    Haz clic en el botón "Sortear amigo" para seleccionar un nombre al azar de la lista.

    El resultado se mostrará en la pantalla.

    Después del sorteo, la lista se reinicia automáticamente para un nuevo juego.

Código JavaScript 🛠️

El código JavaScript está estructurado en las siguientes funciones:
agregarAmigo()

    Descripción: Agrega un nombre a la lista.

    Validaciones:

        El campo no puede estar vacío.

        El nombre no puede estar repetido.

    Acciones:

        Agrega el nombre al array nombres.

        Actualiza la lista en la interfaz.

        Limpia el campo de texto.

actualizarLista()

    Descripción: Actualiza la lista de nombres en la página.

    Acciones:

        Recorre el array nombres y crea elementos <li> para cada nombre.

sortearAmigo()

    Descripción: Selecciona un nombre al azar de la lista.

    Validaciones:

        Debe haber al menos un nombre en la lista.

    Acciones:

        Muestra el resultado del sorteo.

        Reinicia la lista y el array nombres para un nuevo juego.

Event Listeners

    "Añadir": Agrega un nombre al hacer clic en el botón o presionar Enter.

    "Sortear amigo": Realiza el sorteo al hacer clic en el botón.

Cómo Usar 🖥️

    Clona este repositorio o descarga los archivos.

    Abre el archivo index.html en tu navegador.

    Ingresa los nombres de tus amigos y haz clic en "Añadir".

    Cuando todos los nombres estén en la lista, haz clic en "Sortear amigo".

    ¡Listo! El amigo secreto será revelado.

Tecnologías Utilizadas 💻

    HTML: Estructura de la página.

    CSS: Estilos y diseño.

    JavaScript: Lógica de la aplicación.

Contribuciones 🤝

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la aplicación, no dudes en hacer un fork y enviar un pull request.
Licencia 📄

Este proyecto está bajo la licencia MIT.

¡Diviértete organizando tu amigo secreto! 🎉

Este README es breve, claro y cubre todos los aspectos importantes del proyecto. Si necesitas ajustarlo o agregar más detalles, ¡avísame! 😊
