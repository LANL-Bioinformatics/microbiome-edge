## INSTALLATION PREREQUISITES

### Install Node
https://nodejs.org

### Install pm2
`npm install pm2@latest -g`

### Install MongoDB Community Edition
https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials

### Create environment variables

The web client and web server each rely on environment variables for their configuration.
You can define those environment variables directly in your system environment, 
define them in `.env` files, or define them in both places.

Here's how you can define them in `.env` files:

- Populate the "client build" environment configuration file (i.e. `webapp/client/.env`).
  - You can initialize it based upon the corresponding example file:
    ```shell
    cp webapp/client/.env.example \
       webapp/client/.env
    ```
    > Those environment variables are used within `webapp/client/src/config.js`.
- Populate the server environment configuration file (i.e. `webapp/server/.env`).
  - You can initialize it based upon the corresponding example file:
    ```shell
    cp webapp/server/.env.example \
       webapp/server/.env
    ```
    > Those environment variables are used within `webapp/server/config.js`.



## INSTALLING webapp

### Procedure

1. Create a local copy of the microbiome-edge web app in your installation directory
   
   `git clone https://github.com/LANL-Bioinformatics/microbiome-edge.git`
   
2. Create environment variables

    The web client and web server each rely on environment variables for their configuration.
    You can define those environment variables in `.env` files.

    Here's how you can define them in `.env` files:

    - Populate the "client build" environment configuration file (i.e. `webapp/client/.env`). 

        You can initialize it based upon the corresponding example file:
        ```shell
        cp webapp/client/.env.example \
        webapp/client/.env
        ```
        > Those environment variables are used within `webapp/client/src/config.js`.

    - Populate the server environment configuration file (i.e. `webapp/server/.env`). 
    
        You can initialize it based upon the corresponding example file:
        ```shell
        cp webapp/server/.env.example \
        webapp/server/.env
        ```
        > Those environment variables are used within `webapp/server/config.js`.

3. Inside microbiome-edge/installation folder, run the installation script 

    `./install.sh`

## STARTING webapp

### Procedure

1. Start the MongoDB server.
2. Start the web app server via PM2:
   ```shell
   pm2 start pm2.config.js
   ```
    
## STOP webapp
`pm2 stop all`
