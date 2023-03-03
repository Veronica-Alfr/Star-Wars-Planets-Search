import styled from 'styled-components';

const ContainerInput = styled.div`    
    h1 {
        font-family: 'Star Wars', sans-serif;
        font-size: 3em;
        text-align: center;
        padding: 3%;
    }

    .inputs {
        display: flex;
        justify-content: center;
        margin-bottom: 3%;
    }

    button {
        width: 6%;
    }

    button:hover
    {
        opacity: 0.8;
        background-color: #D19A30;
    }

    input, select {
        font-size: 1em;
    }

    input, select, button {
        font-family: "DIN Next W01 Medium";
        padding: 0.7%;
    }
`;

export default ContainerInput;
