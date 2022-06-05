import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux'
import { Route } from "react-router-dom";
import { verify } from './action';
import CarAdmin from "../../components/Admin/Car";
import AccAdmin from "../../components/Admin/Accessory";
import postAdmin from "../../components/Admin/Post";
import AccBillAdmin from "../../components/Admin/AccessoryBill";
import UserAdmin from "../../components/Admin/User";
import ShowroomAdmin from "../../components/Admin/Showroom";
import CarOrder from "../../components/Admin/CarOrder";
import AdminHome from '../../components/Admin/AdminHome/AdminHome';

//neu lam router tự sửa chứ không biết nhé
function AdminPage(props) {
    useEffect(() => {
        props.verify();
    }, [])
    return (
        <Fragment>
            {
                props.admin.loading ? <Fragment></Fragment> :
                    <Fragment>
                        <Route exact path="/admin" component={AdminHome} />
                        <Route path="/admin/car-order" component={CarOrder} />
                        <Route path="/admin/accessory-bill" component={AccBillAdmin} />
                        <Route path="/admin/car" component={CarAdmin} />
                        <Route path="/admin/accessory" component={AccAdmin} />
                        <Route path="/admin/user" component={UserAdmin} />
                        <Route path="/admin/showroom" component={ShowroomAdmin} />
                        <Route path="/admin/post" component={postAdmin} />
                        <Route path="/admin/home" component={AdminHome} />
                    </Fragment>
            }
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    admin: state.admin
})

const mapDispatchToProps = dispatch => ({
    verify: (params) => {
        dispatch(verify(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
