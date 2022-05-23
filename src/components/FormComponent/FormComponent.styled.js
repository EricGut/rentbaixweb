import styled from "styled-components";

export const Form = styled.form`
    display: grid;
    place-items: center;
`;
export const FormInputWarpper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

`;
export const InputLabel = styled.label`
    font-weight: 500;
    text-transform: uppercase;
`;
export const FormInputText = styled.input`
    padding: .3rem .5rem;
    border-radius: .5rem;
    border: 1px #f4f4f4 solid;
`;
export const FormInputTextArea = styled.textarea`
    height: 5rem;
    padding: .3rem .5rem;
    resize: none;
     border: 1px #f4f4f4 solid;
    border-radius: .5rem;
`;
export const ButtonWrapper = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: grid;
    place-items: center;
`;
export const FormSubmit = styled.button`
    border: none;
    padding: .5rem 1.5rem;
    background: var(--main-color);
    font-weight: 800;
    color: #fff;
    border-radius: 2rem;
    text-transform: uppercase;
    cursor: pointer;
`;
export const MailMainMessage = styled.p`
    margin-top: 1rem;
    font-weight: 500;
`;

