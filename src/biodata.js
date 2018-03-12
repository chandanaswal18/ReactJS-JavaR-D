import React from 'react';
import './biodata.css'
class Biodata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            contact: '',
            qualification: '',
            address: '',
            file: '',
            imageUrl: '',
            showDataListFlag: false
        }
    }

    /**
     * On change method for all the text fields
     */
    handleOnchange = (e) => {

        if (e.target.id === 'firstName') {
            this.setState({ firstName: e.target.value });
        }
        else if (e.target.id === 'lastName') {
            this.setState({ lastName: e.target.value });
        }
        else if (e.target.id === 'age') {
            this.setState({ age: e.target.value });
        }
        else if (e.target.id === 'contact') {
            this.setState({ contact: e.target.value });
        }
        else if (e.target.id === 'qualification') {
            this.setState({ qualification: e.target.value });
        }
        else {
            this.setState({ address: e.target.value });
        }
    }

    /**
     * functionality for Image Preview
     */
    handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imageUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

     /**
     * Functionality for Clicking on Save details button
     */
    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('firstName', this.state.firstName);
        localStorage.setItem('lastName', this.state.lastName);
        localStorage.setItem('age', this.state.age);
        localStorage.setItem('contact', this.state.contact);
        localStorage.setItem('qualification', this.state.qualification);
        localStorage.setItem('address', this.state.address);      
        this.setState({ showDataListFlag: true });
        this.setState({ firstName: '', lastName: '', age: '', contact: '', qualification: '', address: '', file: '', imageUrl: '', flashowDataListFlag: true })
    }

    /**
     * functionality for Page Refresh Button
     */
    onbeforeunload = window.onbeforeunload = (e) => {
        let message = "Are you sure you want leave?";
        e.returnValue = message;
        return message;
    };

    /**
     * Functionality for clicking on List of Data button
     */
    handleListClick = (e) => {
        e.preventDefault();
        this.setState({
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName'),
            age: localStorage.getItem('age'),
            contact: localStorage.getItem('contact'),
            qualification: localStorage.getItem('qualification'),
            address: localStorage.getItem('address'),
            showDataListFlag: true
        })
    }

    /**
     * Render part
     */

    render() {
        let { imageUrl } = this.state;
        let $imagePreview = null;
        if (imageUrl) {
            $imagePreview = (<img src={imageUrl} />);
        }

        return (
            <div className='formfields' onbeforeunload={this.onbeforeunload}>
                <form onSubmit={this.handleSubmit} >
                    <h1>BIODATA FORM</h1>

                    <div className='textfield'><input type='text' value={this.state.firstName} onChange={this.handleOnchange}
                        placeholder="First Name" id='firstName' /> </div>

                    <div className='textfield'><input type='text' value={this.state.lastName} onChange={this.handleOnchange}
                        placeholder="Last Name" id='lastName' /> </div>

                    <div className='textfield'><input type='text' value={this.state.age} onChange={this.handleOnchange}
                        placeholder="Age" id='age' /> </div>

                    <div className='textfield'><input type='text' value={this.state.contact} onChange={this.handleOnchange}
                        placeholder="Contact" id='contact' /> </div>

                    <div className='textfield'><input type='text' value={this.state.qualification} onChange={this.handleOnchange}
                        placeholder="Qualification" id='qualification' /> </div>

                    <div className='textfield'><input type='text' value={this.state.address} onChange={this.handleOnchange}
                        placeholder="Address" id='address' /> </div>
                    <div className='textfield'>  <input type="file" onChange={this.handleImageChange} /></div>

                    <div className='textfield'><input type='submit' value='Save Details' /></div>
                </form>
                
                {this.state.showDataListFlag ? <div className='textfield'><button onClick={this.handleListClick}>List Of Data </button></div> : ''}

                {$imagePreview}
            </div>
        );
    }
}

export default Biodata;