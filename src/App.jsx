import Header from "./components/Header";
import EnterContacts from "./EnterContacts";
import Validation from "./validation";
import ContactsList from "./ContactsList";


function App() {
  return (
    <>
      <Header />
      <EnterContacts />
      <Validation />
      <ContactsList /> 
    </>
  )
}

export default App
