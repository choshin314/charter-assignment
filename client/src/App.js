import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/nav/NavBar";
import CustomerTable from "./components/CustomerTable";
import TransactionModal from "./components/transactions/TransactionModal";
import { ModalContextProvider } from "./context/ModalContext";

function App() {
  return (
    <Router>
        <ModalContextProvider>
            <NavBar />
            <Container className="py-3">
                <Route exact path="/">
                    <CustomerTable />
                </Route>
                <Route path="/search">
                    <CustomerTable />
                </Route>
            </Container>
            <TransactionModal />
        </ModalContextProvider>
    </Router>
  );
}

export default App;
