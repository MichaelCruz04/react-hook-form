import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  description: yup.string().min(2, "Minimo dois caracteres").required(),
  content: yup.string().min(2, "Minimo dois caracteres").required(),
});