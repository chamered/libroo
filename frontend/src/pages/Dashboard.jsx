import { useState } from "react";
import Tab from "../components/Tab";
import AddBookForm from "../components/AddBookForm";

function Dashboard() {
    const [activeTab, setActiveTab] = useState("all-books")
    const [showBookForm, setShwoBookForm] = useState(false);

    const renderTabContent = () => {
        switch(activeTab) {
            case "all-books":
                return <Tab tab={0}/>;
            case "to-read":
                return <Tab tab={1}/>;
            case "reading":
                return <Tab tab={2}/>;
            case "read":
                return <Tab tab={3}/>;
            default:
                return <Tab tab={0}/>;
        }
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-8 col-md-10">
                    <h1 className="fw-bold mb-0">My Books</h1>
                    <p className="fw-light text-secondary">Track your reading journey</p>
                </div>
                <div className="col-4 col-md-2 d-flex align-items-center">
                    <button type="button" className="btn btn-primary" onClick={() => setShwoBookForm(true)}>+ Add Book</button>
                </div>
            </div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === "all-books" ? "active" : ""}`}
                        href="#"
                        onClick={() => setActiveTab("all-books")}
                    >
                        All Books
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === "to-read" ? "active" : ""}`}
                        href="#"
                        onClick={() => setActiveTab("to-read")}
                    >
                        To Read
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === "reading" ? "active" : ""}`}
                        href="#"
                        onClick={() => setActiveTab("reading")}
                    >
                        Reading
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === "read" ? "active" : ""}`}
                        href="#"
                        onClick={() => setActiveTab("read")}
                    >
                        Read
                    </a>
                </li>
            </ul>
            <div>
                {renderTabContent()}
            </div>
            {showBookForm && <AddBookForm onCancel={() => setShwoBookForm(false)}/>}
        </div>
    );
}

export default Dashboard;