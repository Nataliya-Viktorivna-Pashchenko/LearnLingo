// import css from "components/Styles.module.css";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/auth.reducer";

export const FormRegister =() => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = { name, email, password };
    console.log('formData: ', formData);

    dispatch(registerThunk(formData));
    form.reset();
    }


return (
    <form  onSubmit={onSubmit}>
    <label >
      Name:
    </label >

        <input
      
      type="text"
      name="userName"
      
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      required
    />

    <label >
      Email:
    </label>

        <input
      
      type="email"
      name="userEmail"
      
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      required
    />

    <label >
      Password:
    </label>

        <input
      
      type="password"
      name="userPassword"
     
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      required
    />

    <button  type="submit">
      Sing Up
    </button>
  </form>
)
}