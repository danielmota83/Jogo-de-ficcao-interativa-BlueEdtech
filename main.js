console.clear();
const prompt = require('prompt-sync')();

//INTRODUÇÃO AO JOGO
console.log();
console.log(' #    Você vai começar a jogar   LA CASA DE PAPEL  DEV!   # ');
console.log('         ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨        ');
console.log();

console.log(
    `De agora em diante lhe chamaremos apenas de "PROFESSOR".\nVocê está coordenando uma assalto à Casa da Moeda da \nEspanha e está da sua casa coordenando um grupo de 4 ASSALTANTES.\nEstes assaltantes estão com alguns refens e com a missão de, \naté daqui no máximo 4 dias, sair da Casa da Moeda com \ntodo o ouro que estiver lá. SÃO 150 TONELADAS DE \nOURO QUE DEVE SER DERRETIDO PARA POSSIBILITAR A FUGA. \nPortanto, o seu papel Professor, é fazer com que todos saim desse assalto vivos e ricos! `,
);
console.log();
console.log('PRESSIONE ENTER PARA COMEÇAR');
prompt();
console.clear();

//DECLARAÇÃO DOS PERSONAGENS
let professor = {
    nome: 'Professor',
    força: 40,
    sanidade: 90,
    energia: 70,
    falaPadrao() {
        console.log('\n*Professor* - Apenas sigam o plano!\n');
    },
    status() {
        let status = `! ${this.nome} !\n _ Força: ${this.força}\n _ Sanidade: ${this.sanidade} \n_ Energia: ${this.energia} `;
        return status;
    },
    mudaStatus(forc, san, ener) {
        this.força += forc;
        this.sanidade += san;
        this.energia += ener;
    },
};

let assaltantes = {
    Berlin: {
        nome: 'Berlin',
        força: 70,
        sanidade: 40,
        energia: 90,
        falaPadrao() {
            console.log('\n*Berlin* - Poderia fazer esse assalto sozinho!\n');
        },
        status() {
            let status = `! ${this.nome} !\n _ Força: ${this.força}\n _ Sanidade: ${this.sanidade}\n _ Energia: ${this.energia} `;
            return status;
        },
        mudaStatus(forc, san, ener) {
            this.força += forc;
            this.sanidade += san;
            this.energia += ener;
        },
    },

    Tokio: {
        nome: 'Tokio',
        força: 90,
        sanidade: 20,
        energia: 90,
        falaPadrao() {
            console.log('\n*Tokio* - Eu confio no professor!\n');
        },
        status() {
            let status = `! ${this.nome}!\n _ Força: ${this.força}\n _ Sanidade: ${this.sanidade}\n _ Energia: ${this.energia} `;
            return status;
        },
        mudaStatus(forc, san, ener) {
            this.força += forc;
            this.sanidade += san;
            this.energia += ener;
        },
    },

    Denver: {
        nome: 'Denver',
        força: 90,
        sanidade: 50,
        energia: 60,
        falaPadrao() {
            console.log('\n*Denver* - Acho que isso não vai dar certo \n!');
        },
        status() {
            let status = `! ${this.nome} !\n _ Força: ${this.força}\n _ Sanidade: ${this.sanidade}\n _ Energia: ${this.energia} `;
            return status;
        },
        mudaStatus(forc, san, ener) {
            this.força += forc;
            this.sanidade += san;
            this.energia += ener;
        },
    },

    Helsinki: {
        nome: 'Helsinki',
        força: 80,
        sanidade: 60,
        energia: 60,
        falaPadrao() {
            console.log('\n*Helsinki* - Gosto muito de todos vocês!\n');
        },
        status() {
            let status = `! ${this.nome} ! \n_ Força: ${this.força}\n_ Sanidade: ${this.sanidade}\n _ Energia: ${this.energia} `;
            return status;
        },
        mudaStatus(forc, san, ener) {
            this.força += forc;
            this.sanidade += san;
            this.energia += ener;
        },
    },
};

let policiaEspanhola = {
    nome: 'Polícia Espanhola',
    força: 90,
    sanidade: 30,
    energia: 80,
    falaPadrao() {
        console.log(
            '\n*Polícia Espanhola* - Temos que matar esses assaltantes!\n',
        );
    },
    status() {
        let status = `! ${this.nome} ! \n_ Força: ${this.força} \n _ Sanidade: ${this.sanidade}\n  _ Energia: ${this.energia} `;
        return status;
    },
    mudaStatus(forc, san, ener) {
        this.força += forc;
        this.sanidade += san;
        this.energia += ener;
    },
};

//DECLARAÇÃO DAS FUNÇÕES
function avançarJogo(horasAgora, horasCorridas) {
    console.log();
    console.log('Pressione enter para avançar');
    prompt();
    console.clear();
    console.log();
    horas = horasAgora + horasCorridas;
    console.log(
        `Tempo decorrido desde a última atualização: ${horasCorridas}h, \nportanto neste exato momento são ${horas}:00h do dia ${dia} do assalto\n`,
    );
    return horas;
}

function statusPersonagens(){
    console.log(professor.status());
        console.log('        ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨              ');
        console.log('ASSALTANTES:');
        console.log(assaltantes.Berlin.status());
        console.log(assaltantes.Denver.status());
        console.log(assaltantes.Tokio.status());
        console.log(assaltantes.Helsinki.status());
        console.log('        ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨              ');
        console.log(policiaEspanhola.status());
        console.log('        ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨              ');
        console.log(
            `Quantidade de ouro derretido: ${ouroDerretido} Toneladas.`,
        );
        console.log(`Número de refens liberados: ${refensLiberados}. `);

        console.log();
}

function verificarSimNao() {
    while (true) {
        console.log();
        console.log(
            `Digite "SIM" para dar uma ordem diferente a ${escolhaDoLider}, \nou "NAO" para deixá-lo seguir o plano.`,
        );
        console.log();
        comandoAosAssaltantes = prompt('').toLowerCase();
        if (
            comandoAosAssaltantes !== 'sim' &&
            comandoAosAssaltantes !== 'nao'
        ) {
            console.log(
                '\nProfessor, sei que está nervoso, mas você deve responte apenas "sim" ou nao\n',
            );
        } else {
            return comandoAosAssaltantes;
        }
    }
}

//DECLARAÇÃO DE LISTAS E VARIÁVEIS
let horas = 8;
let dia = 1;
let resposta = '';
let comandoAosAssaltantes = '';
let escolhaDoLider = '';
let ouroDerretido = 0;
let refensLiberados = 0;
let nomesAssaltantes = ['BERLIN', 'TOKIO', 'DENVER', 'HELSINKI'];
let eventoProfesssor = [
    '[1] Liberar 5 refens',
    '[2] Entregar para a polícia dados pessoais dos assaltantes',
    '[3] Diminuir a quantidade de ouro final que será retirada',
];
let eventoPolicia = [
    'não sabe o que fazer, vai aguardar para novas negociações',
    'está tentando entrar na casa da moeda',
    'vai atirar bombas para desestabilizar os assaltantes',
    'está conseguindo escutar a conversa do Professor com os outros assaltantes',
    'identificou dados secretos do plano do assalto',
    'conseguiu que os assaltantes liberem 10 reféns',
    'não controla a pressão popular e a população espanhola quer que os assaltantes vençam',
];

//LOOP DO JOGO - PERMITE QUE NO FINAL O JOGADOR DECIDA JOGAR NOVAMENTE
Início: while (true) {
    //LOOP DA PASSAGEM DOS DIAS
    while (true) {
        console.log(
            `\nProfessor, bom dia!!! agora são ${horas}:00h,\nmantenha-se concentrado nas suas decisões\ne lembre-se que você tem ${
                5 - dia
            } dia(s) para executar o plano`,
        );
        console.log(
            '--------------------------------------------------------------------------------------',
        );
        //MENSAGENS DIFERENTES AO PROFESSOR A CADA DIA
        if (dia == 1) {
            console.log(
                `\nProfessor, você deve pensar com sagacidade as suas escolhas.\nA prioridade nessas primeiras horas\né conseguir derreter o máximo de ouro que conseguir.\nA polícia e o governo da Espanha ainda \nestão desnorteados e não sabem como agir.\n`,
            );
        } else if (dia == 2) {
            console.log(
                '\nProfessor, está na hora de preparar o plano de fuga.\nAproveite esse segundo dia para deixar a polícia bem ocupada planejando como vão fazer para liberar os refens.\nAssim terá tranquilidade para preparar a fuga.\n',
            );
        } else if (dia == 3) {
            console.log(
                '\nProfessor, hoje é o dia para derreter o resto do ouro.\nTenha total atenção, e lembre-se que o prazo termina amanhã.\n',
            );
        } else {
            console.log(
                '\nProfessor, não se desespere, mas temos que conseguir tirar os assaltantes\ne todo o ouro até às 20h de hoje. Seja eficiente!\n',
            );
        }
        //EXIBE A LISTA DOS NOMES DOS ASSALTANTES
        console.log('\nA lista dos seu assaltantes.\n');
        for (const listaAssaltantes of nomesAssaltantes) {
            console.log(listaAssaltantes);
        }
        //ESCOLHA DO LIDER ENTRE OS ASSALTANTES
        while (
            escolhaDoLider !== 'berlin' &&
            escolhaDoLider !== 'tokio' &&
            escolhaDoLider !== 'denver' &&
            escolhaDoLider !== 'helsinki'
        ) {
            console.log(
                '\nQual dos assaltantes você vai escolher para ser o lider hoje?\n ',
            );
            escolhaDoLider = prompt('').toLowerCase();
            //DEFINE DIFERENTES ACONTECIMENTOS PARA CADA LIDER ESCOLHIDO
            switch (escolhaDoLider) {
                case 'berlin':
                    professor.falaPadrao();
                    console.log(
                        `\n*Professor*: Digo a todos vocês, o escolhido do dia para comandar \no assalto é o (a) ${escolhaDoLider}, todos os demais devem \nseguir as orientações que o lider der, desrespeitem-o apenas se EU mandar!\n`,
                    );
                    assaltantes.Berlin.falaPadrao();

                    verificarSimNao();

                    if (comandoAosAssaltantes == 'sim') {
                        console.log(
                            `\nÓtimo, boa escolha para o dia ${dia}, Berlin \nvai fazer o seu trabalho, sem grandes surpresas`,
                        );
                        ouroDerretido += 10;
                        assaltantes.Berlin.mudaStatus(10, 0, 0);
                        assaltantes.Tokio.mudaStatus(-10, 0, 0);
                        assaltantes.Denver.mudaStatus(-10, 0, 0);
                        assaltantes.Helsinki.mudaStatus(-10, 0, 0);
                        professor.mudaStatus(0, 10, 0);
                        policiaEspanhola.mudaStatus(-10, 0, 0);
                    } else {
                        if (dia != 2 && dia != 4) {
                            console.log(
                                `\nProfessor, infelizmente neste dia ${dia}, \nBerlin não batendo bem das ideias, e como você \nnão deu ordens para ele ele achou que poderia \nfazer o que bem entendesse, ele vai deixar os \ndemais assaltantes sem tarefas e sem armas. `,
                            );
                            refensLiberados += 5;
                            console.log();
                            console.log(
                                `Como os outros assaltantes estavam sem armas, \n5 refens conseguiram fugir. Já são ${refensLiberados} \nrefens fora da casa da moeda, todos os \n50 refens escaparem a polícia irá invadir a \ncasa da moeda matar os assaltantes!\n`,
                            );

                            ouroDerretido += 5;
                            assaltantes.Berlin.mudaStatus(0, -10, 0);
                            assaltantes.Tokio.mudaStatus(-10, -10, -10);
                            assaltantes.Denver.mudaStatus(-10, -10, -10);
                            assaltantes.Helsinki.mudaStatus(-10, -10, -10);
                            professor.mudaStatus(-10, -20, -10);
                            policiaEspanhola.mudaStatus(10, 10, 10);
                        } else {
                            console.log(
                                `Que sorte! Neste dia ${dia}, Berlin está tranquilo e esperto, \nvai derreter bastante ouro, deixar os assaltantes \nmotivados e jogar um pouco de dinheiro para a populaçao que \nestá fora da casa da Moeda. A população \ncomum espanhola estão apoiando o assalto!\n`,
                            );

                            ouroDerretido += 20;
                            assaltantes.Berlin.mudaStatus(10, 10, 10);
                            assaltantes.Tokio.mudaStatus(10, 10, 10);
                            assaltantes.Denver.mudaStatus(10, 10, 10);
                            assaltantes.Helsinki.mudaStatus(10, 10, 10);
                            professor.mudaStatus(10, 20, 10);
                            policiaEspanhola.mudaStatus(-10, -10, -10);
                        }
                    }
                    break;

                case 'tokio':
                    professor.falaPadrao();
                    console.log(
                        `\n*Professor*: Digo a todos vocês, o escolhido do dia \npara comandar o assalto é o (a) ${escolhaDoLider}, todos os demais \ndevem seguir as orientações que o lider der, desrespeitem-o \napenas se EU mandar!\n`,
                    ),
                        assaltantes.Tokio.falaPadrao();

                    verificarSimNao();

                    if (comandoAosAssaltantes == 'sim') {
                        if (dia != 2 && dia != 4) {
                            console.log(
                                `\nProfessor, infelizmente neste dia ${dia}, \nTokio está nervosa, e não está aceitando ordens. \nEla, por sua conta, parou o derretimento de ouro e ligou \npara a polícia para afronta-los, mas acabou vazando informações do plano. \n`,
                            );

                            ouroDerretido += 2;
                            assaltantes.Berlin.mudaStatus(-20, -10, -10);
                            assaltantes.Tokio.mudaStatus(0, -10, -10);
                            assaltantes.Denver.mudaStatus(-10, -10, -10);
                            assaltantes.Helsinki.mudaStatus(-10, -10, -20);
                            professor.mudaStatus(-10, -10, -20);
                            policiaEspanhola.mudaStatus(20, 10, 10);
                        } else {
                            console.log(
                                `\nQue sorte! Neste dia ${dia}, Tokio está tranquila e esperta, \nvai derreter bastante ouro, deixar os assaltantes \nmotivados e jogar um pouco de dinheiro para a populaçao que está \nfora da casa da Moeda. A população comum espanhola estão apoiando o assalto!\n`,
                            );

                            ouroDerretido += 20;
                            assaltantes.Berlin.mudaStatus(10, 10, 10);
                            assaltantes.Tokio.mudaStatus(10, 20, 10);
                            assaltantes.Denver.mudaStatus(10, 10, 10);
                            assaltantes.Helsinki.mudaStatus(10, 10, 10);
                            professor.mudaStatus(10, 20, 10);
                            policiaEspanhola.mudaStatus(-10, -10, -20);
                        }
                    } else {
                        console.log(
                            '\nTokio está disciplinada e não precisa receber ordens, \no plano segue como planejado\n',
                        );
                        ouroDerretido += 10;
                        assaltantes.Berlin.mudaStatus(-10, 0, 0);
                        assaltantes.Tokio.mudaStatus(10, 0, 0);
                        assaltantes.Denver.mudaStatus(-10, 0, 0);
                        assaltantes.Helsinki.mudaStatus(-10, 0, 0);
                        professor.mudaStatus(0, 10, 0);
                        policiaEspanhola.mudaStatus(-10, 0, 0);
                    }

                    break;

                case 'denver':
                    professor.falaPadrao();
                    console.log(
                        `\n*Professor*: Digo a todos vocês, o escolhido do dia \npara comandar o assalto é o (a) ${escolhaDoLider}, \ntodos os demais devem seguir as orientações que o \nlider der, desrespeitem-o apenas se EU mandar!\n`,
                    );
                    assaltantes.Denver.falaPadrao();

                    verificarSimNao();

                    if (comandoAosAssaltantes == 'sim') {
                        console.log(
                            `\nÓtimo, boa escolha para o dia ${dia}, \nDenver vai fazer o seu trabalho, sem grandes surpresas\n`,
                        );
                        ouroDerretido += 10;
                        assaltantes.Berlin.mudaStatus(10, 0, 0);
                        assaltantes.Tokio.mudaStatus(-10, 0, 0);
                        assaltantes.Denver.mudaStatus(-10, 0, 0);
                        assaltantes.Helsinki.mudaStatus(-10, 0, 0);
                        professor.mudaStatus(0, 10, 0);
                        policiaEspanhola.mudaStatus(-10, 0, 0);
                    } else {
                        if (dia == 1) {
                            console.log(
                                `\nProfessor, infelizmente neste dia ${dia},\n Denver está triste e perturbardo, e ele liberou alguns \nrefens, mas continuou a derreter ouro. \n`,
                            );
                            refensLiberados += 5;
                            ouroDerretido += 10;
                            assaltantes.Berlin.mudaStatus(0, -10, 0);
                            assaltantes.Tokio.mudaStatus(-10, -10, -10);
                            assaltantes.Denver.mudaStatus(-20, -10, -20);
                            assaltantes.Helsinki.mudaStatus(-10, -10, -10);
                            professor.mudaStatus(-10, -5, -10);
                            policiaEspanhola.mudaStatus(20, 10, 10);
                        } else {
                            console.log(
                                `\nQue sorte! Neste dia ${dia}, Denver está tranquilo \ne esperto, vai derreter bastante ouro, deixar \nos assaltantes motivados e jogar um pouco \nde dinheiro para a populaçao que está \nfora da casa da Moeda. A população \ncomum espanhola estão apoiando o assalto!\n`,
                            );

                            ouroDerretido += 20;
                            assaltantes.Berlin.mudaStatus(10, 10, 10);
                            assaltantes.Tokio.mudaStatus(10, 10, 10);
                            assaltantes.Denver.mudaStatus(20, 20, 20);
                            assaltantes.Helsinki.mudaStatus(10, 10, 10);
                            professor.mudaStatus(20, 20, 20);
                            policiaEspanhola.mudaStatus(-30, -10, -30);
                        }
                    }

                    break;

                case 'helsinki':
                    professor.falaPadrao();
                    console.log(
                        `\n*Professor*: Digo a todos vocês, o escolhido do \ndia para comandar o assalto é o (a) ${escolhaDoLider}, todos os demais devem \nseguir as orientações que o lider der, desrespeitem-o apenas se EU mandar\n!`,
                    );
                    assaltantes.Helsinki.falaPadrao();

                    verificarSimNao();

                    if (comandoAosAssaltantes == 'sim') {
                        if (dia != 2 && dia != 4) {
                            console.log(
                                `\nProfessor, infelizmente neste dia ${dia}, \nHelsinki está deprimido, e suas ordens o deixaram\nainda mais angustiado. Ele vai cometer suicídio.\n`,
                            );

                            ouroDerretido += 2;
                            assaltantes.Berlin.mudaStatus(-20, -10, -10);
                            assaltantes.Tokio.mudaStatus(0, -10, -10);
                            assaltantes.Denver.mudaStatus(-10, -10, -10);
                            assaltantes.Helsinki.mudaStatus(-10, -10, -20);
                            professor.mudaStatus(-10, -10, -20);
                            policiaEspanhola.mudaStatus(20, 10, 10);
                        } else {
                            console.log(
                                `\nQue sorte! Neste dia ${dia}, Helsinki \nestá tranquilo e esperto, vai derreter bastante ouro, \ndeixar os assaltantes motivados e jogar um pouco de \ndinheiro para a populaçao que está fora \nda casa da Moeda. A população comum espanhola estão apoiando o assalto!\n`,
                            );

                            ouroDerretido += 20;
                            assaltantes.Berlin.mudaStatus(10, 10, 10);
                            assaltantes.Tokio.mudaStatus(10, 20, 10);
                            assaltantes.Denver.mudaStatus(10, 10, 10);
                            assaltantes.Helsinki.mudaStatus(10, 10, 10);
                            professor.mudaStatus(10, 20, 10);
                            policiaEspanhola.mudaStatus(-10, -10, -20);
                        }
                    } else {
                        console.log(
                            '\nHelsinki está disciplinado e não precisa receber \nordens, o plano segue como planejado.\n',
                        );
                        ouroDerretido += 10;
                        assaltantes.Berlin.mudaStatus(-10, 0, 0);
                        assaltantes.Tokio.mudaStatus(10, 0, 0);
                        assaltantes.Denver.mudaStatus(-10, 0, 0);
                        assaltantes.Helsinki.mudaStatus(-10, 0, 0);
                        professor.mudaStatus(0, 10, 0);
                        policiaEspanhola.mudaStatus(-10, 0, 0);
                    }
                    break;

                default:
                    console.log(
                        '\nProfessor, você é muito inteligente,\nmas acho que você está meio disperso, \npor favor digite corretamente um \ndos nomes dos assaltantes que estão na Casa da Moeda.\n ',
                    );
            }
        }

        avançarJogo(horas, 4);

        console.log(
            `\nProfessor, agora é hora de olharmos para o que a \npolícia espanhola está fazendo. Uma série de eventos irá acontecer!\n`,
        );
        policiaEspanhola.falaPadrao();
        console.log(
            '---------------------------------------------------------------------------------------',
        );
        console.log('PRESSIONE ENTER PARA CONTINUAR');
        prompt();
        console.clear();

        //GERA 3 EVENTOS ALEATÓRIOS PARA A POLÍCIA ESPANHOLA EM 7 OPÇÕES POSSÍVEIS
        for (let i = 0; i <= 2; i++) {
            let escolhaAleatoria = Math.floor(Math.random() * 7);
            console.log(
                `\nA polícia espanhola ${eventoPolicia[escolhaAleatoria]}\n`,
            );
            if (escolhaAleatoria == 0) {
                ouroDerretido += 10;
                assaltantes.Berlin.mudaStatus(10, 10, 0);
                assaltantes.Tokio.mudaStatus(10, 0, 0);
                assaltantes.Denver.mudaStatus(10, 10, 0);
                assaltantes.Helsinki.mudaStatus(10, 0, 10);
                professor.mudaStatus(20, 10, 20);
                policiaEspanhola.mudaStatus(-10, -10, -10);
                console.log('Que ótimo professor, BORA DERRETER MAIS OURO!!!');
                professor.falaPadrao();
                avançarJogo(horas, 2);
            } else if (escolhaAleatoria == 1) {
                ouroDerretido += 5;
                assaltantes.Tokio.mudaStatus(10, 0, -10);
                assaltantes.Denver.mudaStatus(-10, 0, -20);
                assaltantes.Helsinki.mudaStatus(-10, 0, -20);
                professor.mudaStatus(0, -10, 0);
                policiaEspanhola.mudaStatus(0, 0, -20);
                console.log(
                    '\nA produção de ouro diminuiu, os asssaltantes não vão deixar a poília entrar. \nDenver e Helsinki lutam bravamente.\n',
                );
                assaltantes.Denver.falaPadrao();
                avançarJogo(horas, 2);
            } else if (escolhaAleatoria == 2) {
                refensLiberados +=5
                assaltantes.Berlin.mudaStatus(-10, 0, 0);
                assaltantes.Tokio.mudaStatus(-10, 0, 0);
                assaltantes.Denver.mudaStatus(-10, 0, 0);
                assaltantes.Helsinki.mudaStatus(-10, 0, 0);
                policiaEspanhola.mudaStatus(20, 0, 0);
                console.log(
                    '\nA produção de ouro para, a bomba assustou todos dentro da Casa da Moeda,\ne 5 refens conseguiram escapar\n',
                );
                professor.falaPadrao();
                avançarJogo(horas, 2);
            } else if (escolhaAleatoria == 3) {
                ouroDerretido += 5;
                assaltantes.Berlin.mudaStatus(-10, 0, 0);
                professor.mudaStatus(0, -20, -10);
                policiaEspanhola.mudaStatus(10, 0, 0);
                console.log(
                    '\nO Professor fica desnorteado, vi ter que mudar alguns planos.\n',
                );
                assaltantes.Tokio.falaPadrao();
                avançarJogo(horas, 1);
            } else if (escolhaAleatoria == 4) {
                ouroDerretido += 5;
                assaltantes.Berlin.mudaStatus(-10, 0, 0);
                professor.mudaStatus(0, -20, -10);
                policiaEspanhola.mudaStatus(10, 0, 0);
                console.log(
                    '\nO Professor fica desnorteado, vi ter que mudar alguns planos.\n',
                );
                assaltantes.Tokio.falaPadrao();
                avançarJogo(horas, 2);
            } else if (escolhaAleatoria == 5) {
                refensLiberados += 10;
                ouroDerretido += 10;
                policiaEspanhola.mudaStatus(20, 10, 0);
                console.log(
                    '\nOs 10 refens foram liberados após negociação,\nmas isso em nada afetou a confiança do professor e seus assaltantes.\n',
                );
                professor.falaPadrao();
                avançarJogo(horas, 2);
            } else {
                ouroDerretido += 20;
                assaltantes.Berlin.mudaStatus(20, 20, 20);
                assaltantes.Tokio.mudaStatus(20, 20, 20);
                assaltantes.Denver.mudaStatus(20, 20, 20);
                assaltantes.Helsinki.mudaStatus(20, 20, 20);
                professor.mudaStatus(20, 20, 20);
                policiaEspanhola.mudaStatus(-20, -20, -20);
                console.log(
                    '\nOs assaltantes cantam em uníssono:\nBELA CIAO, BELA CIAO, BELA CIAO CIAO CIAO!!',
                );
                console.log(
                    '---------------------------------------------------------------',
                );
                assaltantes.Helsinki.falaPadrao();
                avançarJogo(horas, 2);
            }
        }

        console.log(
            `\nProfessor, agora você terá que fazer uma escolha difícil.\nVocê não saberá o que essa escolha irá acarretar,\nmas irá mudar de alguma forma a sorte do jogo neste ${dia}º dia de assalto,\nportanto, pense bem antes de escolher.\n`,
        );
        //EXIBE A LISTA DE OPÇÕES PARA A ESCOLHA DO PROFESSOR
        for (const escolhaProf of eventoProfesssor) {
            console.log(escolhaProf);
        }
        while (true) {
            console.log();
            let escolhaAsCegas = +prompt('Qual opção irá escolher?');
            if (
                escolhaAsCegas !== 1 &&
                escolhaAsCegas !== 2 &&
                escolhaAsCegas !== 3
            ) {
                console.log(
                    `\nSão ${horas}:00h e sei que está cansado, mas por favor, \ndigite o número da opção que deseja.\n`,
                );
            } else if (escolhaAsCegas == 1) {
                console.log(`\nVocê escolher ${eventoProfesssor[0]}.\n`);
                assaltantes.Denver.falaPadrao();
                refensLiberados += 10;
                assaltantes.Berlin.mudaStatus(0, -10, 0);
                assaltantes.Tokio.mudaStatus(-10, 0, 0);
                policiaEspanhola.mudaStatus(0, 20, 0);
                break;
            } else if (escolhaAsCegas == 2) {
                console.log(`\nVocê escolher ${eventoProfesssor[1]}.\n`);
                assaltantes.Tokio.falaPadrao;
                ouroDerretido += 10;
                assaltantes.Denver.mudaStatus(0, 0, -30);
                assaltantes.Helsinki.mudaStatus(0, 0, -30);
                professor.mudaStatus(-20, 0, 0);
                policiaEspanhola.mudaStatus(10, 0, 30);
                break;
            } else {
                console.log(`\nVocê escolher ${eventoProfesssor[2]}.\n`);
                assaltantes.Tokio.falaPadrao();
                assaltantes.Berlin.mudaStatus(10, 10, 10);
                assaltantes.Tokio.mudaStatus(10, 10, 10);
                assaltantes.Denver.mudaStatus(10, 10, 10);
                assaltantes.Helsinki.mudaStatus(10, 10, 10);
                professor.mudaStatus(10, 10, 10);
                break;
            }
        }
        avançarJogo(horas, 4);

        console.log(
            `\nJá são ${horas}:00h, e após esse intenso dia de negociações e derretimento de ouro, vamos analisar os resultados:\n`,
        );
        console.log(
            '---------------------------------------------------------------------------------',
        );
        console.log(
            'Para ver como estão os personagens e a qunatidade de ouro derretida pressione ENTER',
        );
        prompt();
        console.clear();

        //EXIBE O ESTATUS DE CADA PERSONAGEM , A QTDE DE OURO DERRETIDA E O # DE REFENS
        statusPersonagens();
               
        console.log('PRESSIONE ENTER PARA CONTINUAR');
        prompt();
        console.clear();

        //FINALIZA O JOGO ANTES DO FINAL DOS 4 DIAS
        if (ouroDerretido >= 150) {
            console.log('\nVocês conseguiram derreter todo o ouro, \no plano deu certo e o plano de fuga foi executado!!\n');
            console.log('ASSALTANTES VENCERAM, PARABÉNS PROFESSOR!');
            console.log(
                '\nOs assaltantes cantam em uníssono:\nBELA CIAO, BELA CIAO, BELA CIAO CIAO CIAO!!',
            );
            console.log(
                '---------------------------------------------------------------'),
                console.log('STATUS FINAL DOS PERSONAGENS:');
                statusPersonagens();
            break;
        }

        else if (refensLiberados >= 50) {
            console.log(
                '\nO JOGO ACABOU PROFESSOR.\NComo todos os refens foram liberaos, a polícia \nespanhola invadiu a casa da moeda e prendeu todos os assalntantes \ne depois prendeu tmbem voce, Professor.\n',
            );
            console.log('STATUS FINAL DOS PERSONAGENS:');
                statusPersonagens();
            break;
        }

        if (dia != 4) {
            console.log(
                `\nProfessor, como já são ${horas}:00h do dia ${dia} do assalto.\nÉ melhor descansar, pois amanhã terá que continuar com esse difícil plano.\nAMANHÃ SERÁ UM DIA IMPORTANTE!\n`,
            );
            console.log(
                '---------------------------------------------------------------------',
            );
            console.log();
            horas = 8;
            dia += 1;
            escolhaDoLider = '';
        } else {
            console.log(
                `\nProfessor já são ${horas}:00h do dia ${dia} do assalto.\nHora limite da decisão.\nMesmo sem ter todo o ouro derretido temos que tentar a fuga!\n`,
            ),
                console.log('\nPRESSIONE ENTER PARA VER O RESULTADO!\n');
            prompt();
            console.clear();
            break;
        }
    }
    //PERGUNTA E VERIFICAÇÃO PARA JOGAR NOVAMENTE CASO O JOGO TERMINE ANTES DOS 4 DIAS
    if (refensLiberados >= 50 || ouroDerretido>=150){
           while (true) {
        console.log();
        console.log('DESEJA JOGAR NOVAMENTE?');
        console.log();
        resposta = prompt('').toLowerCase();
        if (resposta !== 'sim' && resposta !== 'nao') {
            console.log(
                '\nVocê está emocionado com esse jogo eletrizante né, mas por favor você deve responte apenas "sim" ou nao\n',
            );
        } else {
            if (resposta == 'sim') {
                dia = 1;
                horas = 8;
                continue Início;
            } else {
                console.log('ATÉ A PRÓXIMA!');
                break Início;
            }
        }
    } 
    //RESULTADO DO JOGO APÓS OS 4 DIAS DE ASSALTO
    }else {
        if (
        policiaEspanhola.força <= 0 ||
        policiaEspanhola.energia <= 0 ||
        policiaEspanhola.sanidade <= 0
    ) {
        console.log('ASSALTANTES VENCERAM, PARABÉNS PROFESSOR!');
        console.log(
            '\nOs assaltantes cantam em uníssono:\nBELA CIAO, BELA CIAO, BELA CIAO CIAO CIAO!!',
        );
        console.log(
            '---------------------------------------------------------------',
        );
      
    } else if (
        professor.energia <= 0 ||
        professor.energia <= 0 ||
        professor.energia <= 0
    ) {
        console.log(
            '\nProfessor, você nao aguentou o stress, e se entregou à polícia. \nSem a seu comando a Casa da Moeda foi invadida e todos os assaltantes se entregaram.\n',
        );
    } else if (
        policiaEspanhola.força +
            policiaEspanhola.energia +
            policiaEspanhola.sanidade >
        (assaltantes.Berlin.força +
            assaltantes.Berlin.energia +
            assaltantes.Berlin.sanidade +
            assaltantes.Tokio.força +
            assaltantes.Tokio.energia +
            assaltantes.Tokio.sanidade +
            assaltantes.Berlin.força +
            assaltantes.Berlin.energia +
            assaltantes.Berlin.sanidade +
            assaltantes.Tokio.força +
            assaltantes.Tokio.energia +
            assaltantes.Tokio.sanidade) /
            4
    ) {
        console.log(
            'A polícia espanhola conseguiu entrar na Casa da Moeda, \nrenderam os assaltantes e eles entregaram o professor, \nestão todos em prisão perpétua.',
        );
    } else {
        console.log(
            `Parabéns professor, mesmo sem derreter todo o ouro, \nfoi derretido ${ouroDerretido} toneladas, o que é ouro suficiente para todos. \nTodos os assaltantes conseguiram fugir no plano especial de fuga!`,
        );
        console.log(
            '\nOs assaltantes cantam em uníssono:\nBELA CIAO, BELA CIAO, BELA CIAO CIAO CIAO!!',
        );
        console.log(
            '---------------------------------------------------------------',
        );
    }
    


    //PERGUNTA E VERIFICAÇÃO PARA JOGAR NOVAMENTE
    while (true) {
        console.log();
        console.log('DESEJA JOGAR NOVAMENTE?');
        console.log();
        resposta = prompt('').toLowerCase();
        if (resposta !== 'sim' && resposta !== 'nao') {
            console.log(
                '\nVocê está emocionado com esse jogo eletrizante né, mas por favor você deve responte apenas "sim" ou nao\n',
            );
        } else {
            if (resposta == 'sim') {
                dia = 1;
                horas = 8;
                continue Início;
            } else {
                console.log('ATÉ A PRÓXIMA!');
                break Início;
            }
        }
    }
}
}
