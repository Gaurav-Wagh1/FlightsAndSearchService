here, we'll not directly create all files here in the main directory, as we have to write tests ;
these tests are important while deploying the services, if all those test cases are done that means our system is good to go;
but we don't want that these tests should be uploaded on the server as it will cause more load on the server;
hence, we create a folder named src, and inside this src all the files are created;
/
    src/
        index.js        =>  main server file;
        models/
        controllers/
        middlewares/
        services/
        utils/      =>      some extra function, which is common for all files;
        config/        =>   for database configurations;
        repository/

/   tests/


we can create a gitignore file in root to ignore some sensitive / large files for git; that means git will not track those files then;

we can also create a .env file in root, and install a dotenv package , this file will contain all our sensitive data like db pass, api key, etc;

now to use this .env properties directly inside the index.js is not a good option, hence we will create a file named serverConfig.js inside config/ folder, and in that servserconfig.js we will get the port and then will export it. further, we will import it inside the index.js;

then install all the dependencies like sequelize, sequelize cli, and mysql 2;

