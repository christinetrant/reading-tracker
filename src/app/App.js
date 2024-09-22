import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import ReadBooks from "./components/ReadBooks";
import WantToReadBooks from "./components/WantToReadBooks";

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/read">Read Books</Link>
                        </li>
                        <li>
                            <Link to="/want-to-read">Want to Read</Link>
                        </li>
                        <li>
                            <Link to="/add">Add Book</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={BookList} />
                    <Route path="/read" component={ReadBooks} />
                    <Route path="/want-to-read" component={WantToReadBooks} />
                    <Route path="/add" component={AddBook} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
