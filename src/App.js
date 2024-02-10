import { Header } from "./Header";
import { Leftbar } from "./Leftbar";
import { Rightbar } from "./Rightbar";
import "./app.css"
export const App= ()=>{
    return (<div className="root-container">
        <Header />
        <div className="body">
            <Leftbar/>
            <Rightbar/>
        </div>

    </div>);
}