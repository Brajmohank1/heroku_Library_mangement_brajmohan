import React,{Component} from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

render(){
    return(
        <div className="container mt-4 home text-center align-self-center">
        <br/><br/><br/>
           
            <div className="row darkbg text-center justify-content-center">
            <h1 align="center"  className=" mt-5 "> Welcome to the TMSL Library</h1>
        <br/><br/><br/>
        <br/><br/><br/>

            <h4 className="mb-5">
            This library management system is software that is designed to manage all the functions of a library. It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates. This system completely automates all your library's activities.
            <br/><br/> </h4>
            </div>
            <div className="row darkbg justify-content-center">
            <table className="mb-5">
    <tr> <th colspan="2"><h6> Physical Library Timings</h6></th> </tr>
    <tr> <td><h6>Opening Time</h6> </td> <td> <h6>9.00 A.M.</h6></td></tr>
    <tr> <td>Closing Time </td> <td> 5.00 P.M.</td></tr>
            </table>
            <br/>
            <br/>
                </div>
                <br/><br/>
                <br/><br/><br/>
            </div>
        );
}

}

export default Home;