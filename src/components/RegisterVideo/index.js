import React from "react";
import { StyledRegisterVideo } from "./styles";

//custom hook
function useForm(propsDoForm){
    const [values, setValues] = React.useState(propsDoForm.inicialValues);
    
    return {
        values,
        handleChange: (event) => {
                const value = event.target.value;
                const name = event.target.name
                setValues({
                    ...values, 
                    [name]: value,
                });
            },
            clearForm() {
                setValues({});
            }
        }
    }

export default function  RegisterVideo(){

    const formCadastro = useForm( {
        inicialValues:{ titulo: "", url: "" }
    });

    const [formVisivel, setFormVisivel] = React.useState(false);
   

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(evento) => { 
                        evento.preventDefault();
                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button"className="close-modal" onClick={() => setFormVisivel(false) }>
                                X
                            </button>
                            <input 
                            placeholder="Título do vídeo" 
                            name="titulo"
                            value={ formCadastro.values.titulo } 
                            onChange={ formCadastro.handleChange }/>

                            <input 
                            placeholder="Url do vídeo" 
                            name="url"
                            value={ formCadastro.values.url } 
                            onChange={ formCadastro.handleChange }/>

                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                   </form>
                    
            ) : false }
        </StyledRegisterVideo>
    )

}