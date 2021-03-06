module.exports = (app) => {
    /* INDEX: us need create one form to use this variables globals, no send more for json in router */
    app.get("/", (req, res) => {
        res.render('base-site/index', {
            /* Per Page */
            title: 'Gluesp',
            description: 'O postulante ao ingresso nos quadros da Ordem Maçônica, deve autoavaliar-se em busca de valores, costumes, atitudes (interiores), e  comportamentos sociais exteriorizados cotejando-os com algumas premissas...',
            keywords: 'maconaria macom ordem sociedade fraternal integrante organizacao misteriosa sigilosa praticas segredos ritos tradicoes especulacoes reunioes cumprimento palavras socorro senha cerimonia companheiros apuros poderosos monarcas mil milhoes mundo ffinancas politica mobilizar governo controlar Winston Churchill personagens ilustres corrupcao perjurio juramento testemunhar contra violar falso processo judicial trair simbolo dolar nota triangulo olho ve novus ordo seclorum lema Benjamin Franklin design comite coincidencia iniciacao forca pescoco corda garganta simbolizar cordao umbilical',
            /* Contact */
            email: 'contato@comosermacom.com.br',
            tel: '11 4515-7486',
            whats: '#',
            endereco: 'Rua Padre Benedito de Camargo 797, Penha - SP Capital',
            cidade: 'São Paulo',
            cep: '03604-010 ',
            favicon: 'favicon.png',
            linkgoogle: '',
            linkface: '',
            linktwitter: '',
            author: 'Fabio Guelfi'
        });
    });

    // INSTITUTO
    app.get("/instituto", (req, res) => {
        res.render('base-site/instituto', {
            /* Per Page */
            /* Per Page */
            title: 'Instituto',
            nomeEmpresa: 'Instituto de Iniciação e Inclução Maçonica',
            description: 'O postulante ao ingresso nos quadros da Ordem Maçônica, deve autoavaliar-se em busca de valores, costumes, atitudes (interiores), e  comportamentos sociais exteriorizados cotejando-os com algumas premissas...',
            keywords: 'maconaria macom ordem sociedade fraternal integrante organizacao misteriosa sigilosa praticas segredos ritos tradicoes especulacoes reunioes cumprimento palavras socorro senha cerimonia companheiros apuros poderosos monarcas mil milhoes mundo ffinancas politica mobilizar governo controlar Winston Churchill personagens ilustres corrupcao perjurio juramento testemunhar contra violar falso processo judicial trair simbolo dolar nota triangulo olho ve novus ordo seclorum lema Benjamin Franklin design comite coincidencia iniciacao forca pescoco corda garganta simbolizar cordao umbilical',
            /* Contact */
            email: 'contato@comosermacom.com.br',
            tel: '11 4515-7486',
            whats: '#',
            endereco: 'Rua Padre Benedito de Camargo 797, Penha - SP Capital',
            cidade: 'São Paulo',
            cep: '03604-010 ',
            favicon: 'favicon.png',
            linkgoogle: '',
            linkface: '',
            linktwitter: '',
            author: 'Fabio Guelfi'
        });
    });

    // PORQUE-SER-MACOM
    app.get("/porque-ser-macom", (req, res) => {
        res.render('base-site/porque-ser-macom', {
            /* Per Page */
            title: 'Por que ser Maçom?',
            nomeEmpresa: 'Instituto de Iniciação e Inclução Maçonica',
            description: 'O postulante ao ingresso nos quadros da Ordem Maçônica, deve autoavaliar-se em busca de valores, costumes, atitudes (interiores), e  comportamentos sociais exteriorizados cotejando-os com algumas premissas...',
            keywords: 'maconaria macom ordem sociedade fraternal integrante organizacao misteriosa sigilosa praticas segredos ritos tradicoes especulacoes reunioes cumprimento palavras socorro senha cerimonia companheiros apuros poderosos monarcas mil milhoes mundo ffinancas politica mobilizar governo controlar Winston Churchill personagens ilustres corrupcao perjurio juramento testemunhar contra violar falso processo judicial trair simbolo dolar nota triangulo olho ve novus ordo seclorum lema Benjamin Franklin design comite coincidencia iniciacao forca pescoco corda garganta simbolizar cordao umbilical',
            /* Contact */
            email: 'contato@comosermacom.com.br',
            tel: '11 4515-7486',
            whats: '#',
            endereco: 'Rua Padre Benedito de Camargo 797, Penha - SP Capital',
            cidade: 'São Paulo',
            cep: '03604-010 ',
            favicon: 'favicon.png',
            linkgoogle: '',
            linkface: '',
            linktwitter: '',
            author: 'Fabio Guelfi'
        });
    });

    // MAPA-SITE
    app.get("/mapa-site", (req, res) => {
        res.render('base-site/mapa-site', {
            /* Per Page */
            title: 'Mapa do Site',
            nomeEmpresa: 'Instituto de Iniciação e Inclução Maçonica',
            description: 'O postulante ao ingresso nos quadros da Ordem Maçônica, deve autoavaliar-se em busca de valores, costumes, atitudes (interiores), e  comportamentos sociais exteriorizados cotejando-os com algumas premissas...',
            keywords: 'maconaria macom ordem sociedade fraternal integrante organizacao misteriosa sigilosa praticas segredos ritos tradicoes especulacoes reunioes cumprimento palavras socorro senha cerimonia companheiros apuros poderosos monarcas mil milhoes mundo ffinancas politica mobilizar governo controlar Winston Churchill personagens ilustres corrupcao perjurio juramento testemunhar contra violar falso processo judicial trair simbolo dolar nota triangulo olho ve novus ordo seclorum lema Benjamin Franklin design comite coincidencia iniciacao forca pescoco corda garganta simbolizar cordao umbilical',
            /* Contact */
            email: 'contato@comosermacom.com.br',
            tel: '11 4515-7486',
            whats: '#',
            endereco: 'Rua Padre Benedito de Camargo 797, Penha - SP Capital',
            cidade: 'São Paulo',
            cep: '03604-010 ',
            favicon: 'favicon.png',
            linkgoogle: '',
            linkface: '',
            linktwitter: '',
            author: 'Fabio Guelfi'
        });
    });
};


