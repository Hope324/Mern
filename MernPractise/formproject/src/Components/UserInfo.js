
import "bootstrap/dist/css/bootstrap.min.css";



function UserInfo(props) {

    return (
        <>

            <div className="col-sm-3 p-1">
                <div className="card">
                    <div className="card-body">
                        
                        <div key={props.productData.id} className="card-text text-center ">Name:{props.productData.Name1}</div>
                        <div key={props.productData.id} className="card-text text-center">Password:{props.productData.Pasword1}</div>


                    </div>
                </div>
            </div>

        </>

    )
}
export default UserInfo;