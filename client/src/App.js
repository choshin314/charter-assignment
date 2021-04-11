import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/nav/NavBar";
import CustomerTable from "./components/CustomerTable";
import TransactionModal from "./components/transactions/TransactionModal";
import { ModalContextProvider } from "./context/ModalContext";

function App() {
  return (
    <ModalContextProvider>
      <NavBar />
      <Container className="py-3">
        <CustomerTable />
      </Container>
      <TransactionModal />
    </ModalContextProvider>
  );
}

export default App;
