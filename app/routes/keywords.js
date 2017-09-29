module.exports = (app) => {
    // COMO ENTRAR NA MAÇONARIA
    app.get("/como-entrar-maconaria",(req, res) =>{
        res.render('base-site/keywords/como-entrar-maconaria', {
            //Per page
            title :'Como entrar na Maçonaria',
            description : 'O postulante ao ingresso nos quadros da Ordem Maçônica, deve autoavaliar-se em busca de valores, costumes, atitudes (interiores), e  comportamentos sociais exteriorizados cotejando-os com algumas premissas...',
            keywords : 'maconaria macom ordem sociedade fraternal integrante organizacao misteriosa sigilosa praticas segredos ritos tradicoes especulacoes reunioes cumprimento palavras socorro senha cerimonia companheiros apuros poderosos monarcas mil milhoes mundo ffinancas politica mobilizar governo controlar Winston Churchill personagens ilustres corrupcao perjurio juramento testemunhar contra violar falso processo judicial trair simbolo dolar nota triangulo olho ve novus ordo seclorum lema Benjamin Franklin design comite coincidencia iniciacao forca pescoco corda garganta simbolizar cordao umbilical',
            //Contact
            email : 'contato@comosermacom.com.br',
            tel : '11 4515-7486',
            whats : '#',
            endereco : 'Rua Padre Benedito de Camargo 797, Penha - SP Capital',
            cidade : 'São Paulo',
            cep : '03604-010 ',
            favicon : 'favicon.png',
            linkgoogle : '',
            linkface : '',
            linktwitter : '',
            author : 'Fabio Guelfi'
        });
    });

    // COMO SER MACOM
    app.get("/como-ser-macom",  (req, res) => {
        res.render("base-site/keywords/como-ser-macom", {
            //Per page
            title :'Como ser Maçom',
            description : 'O postulante ao ingresso nos quadros da Ordem Maçônica, deve autoavaliar-se em busca de valores, costumes, atitudes (interiores), e  comportamentos sociais exteriorizados cotejando-os com algumas premissas...',
            keywords : 'maconaria macom ordem sociedade fraternal integrante organizacao misteriosa sigilosa praticas segredos ritos tradicoes especulacoes reunioes cumprimento palavras socorro senha cerimonia companheiros apuros poderosos monarcas mil milhoes mundo ffinancas politica mobilizar governo controlar Winston Churchill personagens ilustres corrupcao perjurio juramento testemunhar contra violar falso processo judicial trair simbolo dolar nota triangulo olho ve novus ordo seclorum lema Benjamin Franklin design comite coincidencia iniciacao forca pescoco corda garganta simbolizar cordao umbilical',
            //Contact
            email : 'contato@comosermacom.com.br',
            tel : '11 4515-7486',
            whats : '#',
            endereco : 'Rua Padre Benedito de Camargo 797, Penha - SP Capital',
            cidade : 'São Paulo',
            cep : '03604-010 ',
            favicon : 'favicon.png',
            linkgoogle : '',
            linkface : '',
            linktwitter : '',
            author : 'Fabio Guelfi'})

    })

};
