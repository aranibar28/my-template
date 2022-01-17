# Template

Un template sencillo con navegación de rutas y responsive realizado con Tailwind.

## Dependencias

    react-router-dom@6
    react-icons
    lodash
    tailwindcss
    autoprefixer
    postcss
    sass

## 1. Creación de Components

| Home          | Services          | Projects          | Contact          | Navigation          |
| ------------- | ----------------- | ----------------- | ---------------- | ------------------- |
| HomePage.js   | ServicesPage.js   | HomeProjects.js   | ContactPage.js   | NavigationPage.js   |
| HomePage.scss | ServicesPage.scss | HomeProjects.scss | ContactPage.scss | NavigationPage.scss |
| index.js      | index.js          | index.js          | index.js         | index.js            |

Exportar todos los componentes:

    export * from "./Home";
    export * from "./Services";
    export * from "./Projects";
    export * from "./Contact";
    export * from "./Navigation";

## 2. Creación de Pages

Crear un componente que permita importar los anteriores componentes y luego volver a exportar.

|         |             |             |            |          |
| ------- | ----------- | ----------- | ---------- | -------- |
| Home.js | Services.js | Projects.js | Contact.js | index.js |
|         |             |             |            |          |

Exportar todos los componentes:

    export * from "./Home";
    export * from "./Services";
    export * from "./Projects";
    export * from "./Contact";

## 3. Creación de Layouts

Crear una archivo ClientLayout e importar el componente Navigation.js que permita capturar los props.

    const { children } = props;

    return(
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
    );

## 4. Creación de Rutas

- Crear un archivo routes.home.js donde defines las rutas junto con sus páginas que vas a rederizar.
- Crear un archivo routes.js donde exportamos un array con las rutas definidas.
- Luego en el archivo Navigation.js utilizaremos los componentes del React Router V6.

## 5. Importación de Navigation.js

- Finalmente, exportar el archivo routes/Navigation.js al App.js
