// import css from "components/Styles.module.css";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/auth.reducer";

export const FormLogin =() => {

  const dispatch = useDispatch();

const onSubmit = (e) => {
e.preventDefault();
const form = e.currentTarget;

const email = form.elements.userEmail.value;
const password = form.elements.userPassword.value;
const formData = { email, password};

dispatch(loginThunk(formData))
form.reset();
}

return (
    <form  onSubmit={onSubmit}>
     <label >
      Email:
    </label>

        <input
      
      type="email"
      name="userEmail"
      
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      required
    />

    <label className={css.titleItem}>
      Password:
    </label>

        <input
      
      type="password"
      name="userPassword"
     
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      required
    />

    <button  type="submit">
      Sing In
    </button>
  </form>
)
}