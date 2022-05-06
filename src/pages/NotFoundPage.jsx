import React, { Component } from 'react';
export default class NotFoundPage extends Component {
    render() {
        return (
            <>
            <form action='http://localhost/Abhishek/Reactlaravel/api/CreateData' method='post' encType="multipart/form-data">
            <center>
            <table>
                <tbody>
                <tr>
                    <td> <input type="text" name="name" placeholder='Enter Name' /> </td>
                </tr>
                 <tr>
                    <td> <input type="email" name="email" placeholder='Enter Email' /> </td>
                </tr>
                 <tr>
                    <td> <input type="tel" name="phone" placeholder='Enter Phone' /> </td>
                </tr>
                 <tr>
                    <td> upload <input type="file" name="pfile" /> </td>
                </tr>
                 <tr>
                    <td> <input type="submit" value="Submit" /> </td>
                </tr>
                </tbody>
            </table>
            </center>
            </form>
            </>
        )
        
    }
}
// http://localhost/Abhishek/Reactlaravel/public/uploads/bbbf.jpg