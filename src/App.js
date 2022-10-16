import './App.css';
import Header from "./components/Header/Header";
import MainContacts from "./components/MainContacts/MainContacts";
import ContactsText from "./components/ContactsText/ContactsText";
import ContactsForm from "./components/Form/ContactsForm";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <main>
        <div className="wrapper">
            <Header />
            <MainContacts />
            <ContactsText />
            <ContactsForm />
        </div>
        <Footer />
    </main>
  );
}

export default App;
