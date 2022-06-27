import React from 'react'
import  {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./core/Home"
import Signup from './user/Signup'
import Signin from './user/Signin'
import AdminRoutes from './auth/helper/AdminRoutes'
import PrivateRoutes from './auth/helper/PrivateRoutes'
import UserDashBoard from './user/UserDashBoard'
import AdminDashBoard from './user/AdminDashBoard'
import AddCategory from './admin/AddCategory'
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from './admin/ManageProducts'
import UpdateProduct from "./admin/UpdateProduct";
import Contact from './core/Contact'
import Cart from "./core/Cart";
import Orders from './admin/Orders'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/" exact component={Home} />
                <Route path ="/signup" exact component={Signup} />
                <Route path ="/Contact" exact component={Contact} />
                <Route path ="/signin" exact component={Signin} />
                <Route path="/cart" exact component={Cart} />
                
                <PrivateRoutes path ="/user/dashboard" exact component={UserDashBoard} />
                <AdminRoutes path ="/admin/dashboard" exact component={AdminDashBoard} />
                <AdminRoutes path ="/admin/create/category" exact component={AddCategory} />
                <AdminRoutes
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoutes path="/admin/create/product" exact component={AddProduct} />
        <AdminRoutes path="/admin/products" exact component={ManageProducts} />
        <AdminRoutes path="/admin/orders" exact component={Orders} />
        <AdminRoutes
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;