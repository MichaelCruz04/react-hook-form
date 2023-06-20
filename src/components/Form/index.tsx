import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { TForm } from "./types";
import { schema } from "./validation";

import './Form.css'

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const addPost = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <main>
        <div className="card-post">
          <h1>Criar postagem</h1>

          <div className="line-post"></div>

          <div className="card-body-posty">
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label>Titulo</label>
                <input type="text" {...register("title")}/>
                {errors.title?.message}
              </div>

              <div className="fields">
                <label>Descrição</label>
                <input type="text" {...register("description")} />
                {errors.description?.message}
              </div>

              <div className="fields">
                <label>Conteúdo</label>
                <textarea {...register("content")}></textarea>
                {errors.content?.message}
              </div>

              <div className="btn-post">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Form;