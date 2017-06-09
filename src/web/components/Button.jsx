import styled from 'styled-components';

const Button = styled.button`
    background: #eff3f6;
    background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
    background-position: -1px -1px;
    background-size: 110% 110%;
    border: 1px solid rgba(27,31,35,0.2);
    border-radius: 0.25em;
    padding: 10px;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:disabled {
        opacity: .7;
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        background: #e6ebf1;
        background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
        border-color: rgba(27,31,35,0.35);
    } 
`;

export default Button;
