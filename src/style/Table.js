import styled from 'styled-components';

// concertar tabela saindo da img, e tamanho da img ao pesquisar o planeta deve se manter deve ter o plano de fundo estrelado e não branco.

const ContainerTable = styled.div`
    @import url('https://fonts.cdnfonts.com/css/star-wars');
    @import url(//db.onlinewebfonts.com/c/fb1fb17e0be5850598ac0f40e356bf77?family=DINNextRoundedLTW01-Medium);

    color: white;

    table {
        font-family: "DIN Next W01 Medium";
        text-align: center;
        border-spacing: 0;
        border-collapse: collapse;
        margin: auto;
        width: 50% !important;
    }

    table, td, th {
        border: 1px solid white;
    }

    th {
        font-size: 1.1em;
    }

    td {
        font-size: 1.05em;
    }

    td, th {
        padding: 0.5em;
    }

    .column-films, .row-films {
        padding: 1.3em;
    }
`;

export default ContainerTable;
