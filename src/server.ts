import app from './app/app';
import database from './data/mysqldatabase';


(async () => {
    try {
        const port = parseInt(`${process.env.PORT}`);

        
        await database.sync();
        console.log("O Banco de dados da api_jalileiturabiblicaautenticacao está online.");
        
        app.listen(port, () =>{
            console.log("API de autenticação rodando na porta " + port);
        });

    } catch (error) {
        console.error(`Erro interno na API. Mensagem: ${error}`);
    }
})();