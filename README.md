# BuscadorIFindIt-React

Microfrontend powered by React (create-react-app), it renders search engine elements based on BuscadorIFindIt-API results, it includes a nginx server which serves js and css scripts dynamically via static url.

### How to Deploy by using Docker

- Clone this repository (Don't forget to specify your git username)

    ```console
    $ git clone https://(your_user)@github.com/Creangel/BuscadorIFindIt-React.git
    ```

- Move to BuscadorIFindIt-React directory

    ```console
    $ cd BuscadorIFindIt-React
    ```
- Build a docker image based on [Dockerfile](Dockerfile) (Name your docker image as you prefer)

    ```console
    $ docker build -t buscador-ifindit-react:latest .
    ```
- Run a docker container and expose its port 80

    ```console
    $ docker run -dt --name ifindit-react -p 4080:80 buscador-ifindit-react:latest
    ```

Now, you can add main.js and main.css on your HTML file, by adding **\<script\>** and **\<link\>** tags, don't forget  include a **\<div\>** tag identified as **SearchIFindIt**, and also add a **\<link\>** to load bootstrap, with these tags, React app will be displayed on screen.

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <!--
        Load bootstrap styles by linking https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css
        -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>IFindIt</title>
    </head>
    <body>
        <!--
        Add a div called SearchIFindIt, react app will be rendered inside this div
        -->
        <div id="SearchIFindIt"></div>
        <!--
        Add a script with sessionStorage items as initial params for the app
        -->
        <script>
            sessionStorage.setItem("finder", "as325np");
            sessionStorage.setItem("find", "True");
            sessionStorage.setItem("query", "*");
            sessionStorage.setItem("pageNum", "1");
            sessionStorage.setItem("start", "0");
            sessionStorage.setItem("type", "load");
            sessionStorage.setItem("sort", "sort");
            sessionStorage.setItem("inmeta", "");
        </script>
        <!--
        Load main.css and main.js via ifindit.creangel.com proxy
        -->
        <link href="https://ifindit.creangel.com/IFindItApp/main.css" rel="stylesheet">
        <script src="https://ifindit.creangel.com/IFindItApp/main.js" crossorigin></script>
    </body>
    </html>
```

**NOTE:** You must provide sessionStorage items, these items will be used by react to load default results from backend Ifindit API.  

**NOTE:** "https://ifindit.creangel.com/IFindItApp" is a previously configured proxy that points to your docker container host and port, in below example configuration the container was deployed on host 192.168.230.12 and port 4080. Please ask to infrastructure or development staff for instructions about **ifindit.creangel.com** proxy host location.

The proxy looks like this:

```nginx
                location /IFindItApp/{
                        proxy_set_header Access-Control-Allow-Origin *;
                        proxy_pass http://192.168.230.12:4080/;
                }
```






