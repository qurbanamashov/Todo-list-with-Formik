// import { Field, Form, Formik} from 'formik';
import Contact from "./Contact.js/Contact";
function App() {
  return (
    <>
    <Contact/>
      {/* <Formik
      initialValues={{
        username:"",
        password:""
      }}
      onSubmit={(values)=>{
        console.log(values)
      }}
      >
        {(props)=>(
          <Form>
            <Field name="username"/>
            <Field name="password" type="password"/>
            <button  type='submit'>sing in</button>
          </Form>
        )}
      </Formik> */}
    </>
  );
}
export default App;
