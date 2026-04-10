# Clase 03 - IA para programadores

## Repaso Docker

<https://www.docker.com/>

<https://learn.microsoft.com/en-us/windows/wsl/install>

```aporte
Problema con el loop infinito de Docker en el Powelshell pongan " systeminfo " y revisen la parte de: Requisitos de Hyper-V les tiene que aparecer un mensaje si se habilito o no la virtualización, en mi caso la active pero se ve que no la tomo windows.
```

## Herramienta para trabajar con base de datos (Database Build)

* Generar Esquemas de Bases de datos a partir de lenguaje natural
* Visualizar los esquemas de la base de datos
* Crear una base de datos de prueba como soporte a toda la operatoria
    * Crea una base de datos postgres por detras
    * No es como chatgpt que crea las consultas nomas sino que te permite jugar con la base de datos
    * Le podes poner datos de prueba para probar
* Generar consultas SQL a partir de lenguaje natural
* Probar las consultas con la herramienta sobre la base de datos real
* Optimizar consulta
* Si tenes una base de datos ya creada poder cargarle los scrips de creacion
* Permite hacer deploy de tu base de datos a Supabase
* Te permite contectarte con un cliente de Postgres a la base con la que estas trabajando


<https://database.build/>
<https://supabase.com/>

## IAs para crear de manera muy sencilla aplicaciones React

### v0 (de Vercel)

Está especializado en generar componentes de interfaz de usuario (UI), típicamente en React/Tailwind.
Su IA convierte descripciones o diseños en código frontend reutilizable.
No genera backend ni lógica de datos — eso queda para vos o para otro servicio.

### Bolt (de StackBlitz)

Es una plataforma de desarrollo AI-asistido completa donde podés describir tu aplicación y la IA va generando código funcional full-stack que se ejecuta en un editor en tu navegador.
Incluye tanto frontend como backend y herramientas de colaboración, con control de código directo para desarrolladores técnicos.

### Lovable

Va más allá del código aislado: genera aplicaciones completas full-stack, auto-configura backend (base de datos, autenticación, etc.) y te da tanto edición visual como acceso al código.
Su foco es que alguien sin mucha experiencia técnica pueda describir su idea y tener una app deployable rápidamente.

* <https://bolt.new/>
* <https://v0.app/>
* <https://lovable.dev/>
* <https://replit.com/>


## Prompts para usar en Lovable, v0, Bolt

<https://gemini.google.com/share/e37b5d2aa4ea>


## Creamos Kanban

<https://lovable.dev/projects/b771bd88-a4cf-4e14-b6e0-f89545a79eff?magic_link=mc_2ccb0761-3654-4e5c-be50-89989e88f9f9>

<https://v0.app/chat/kanban-board-application-vMI2seyUakV?ref=81SCUV>

## WebSim

<https://websim.com/>
<https://threejs.org/>

## Referencias de código (No IA)

<https://codepen.io/trending>

# Code Assistant (Asistentes de código)

* GitHub Copilot <https://github.com/copilot>
    - GitHub.copilot-chat

## Trabando en el chat de copilot con Workspaces

Ctrl + Shift + I

```prompt
@workspace new agregar una api en nojs y expres que devuelva el clima
```