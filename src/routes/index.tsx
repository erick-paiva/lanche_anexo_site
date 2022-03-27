import {Switch} from "react-router-dom"
import { Cardapio } from "../pages/Cardapio"
import Login from "../pages/Login"
import { MenuCategorias } from "../pages/Menu_categorias"
import { Route } from "./route"

export default function Routes (){


    return(
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/menu" component={MenuCategorias} />
            <Route exact path="/cardapio/:categoria" component={Cardapio} />
        </Switch>
    )
}