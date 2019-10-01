import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import UpdateForm from './UpdateForm'

class ItemPresenter extends Component {
    state = {
        isUpdating: false,
        redirect: false,
    }

    handleDelete = async () => {
        await fetch(`${'/api' + this.props.activeRoute + '/' + this.props.read._id }`, {
            method: 'DELETE',
        })
        .then(() => this.setState({redirect: !this.state.redirect}))
        .catch(err => console.log(err))
    }

    toggleUpdate = () => {
        this.setState({ isUpdating: !this.state.isUpdating })
    }

    updateForm = () => (
        <div>
            <UpdateForm read={this.props.read} closeUpdate={this.toggleUpdate} activeRoute={this.props.activeRoute}/>
            <input type='button' value="Cancel" onClick={this.toggleUpdate} />
        </div>
    )

    buttons = () => (
        <div>
            <input type='button' className='delete-update-buttons' value='Delete' onClick={this.handleDelete} />
            <input type='button' className='delete-update-buttons' value='Update' onClick={this.toggleUpdate} />
        </div>
    )

    render(){
        const inventoryItems = this.props.read
        const redirect = this.state.redirect
        return(
            <div>
            { redirect? <Redirect to={{pathname: `/refresh${this.props.activeRoute}`, state: {from: this.props.location}}} /> :
            <div className="readForm container">
                <ul>
                    <h1 className='readItemsH1'>{inventoryItems.name}</h1>
                    Type: {inventoryItems.type} <br/>
                    { inventoryItems.location ? 'Location: ' + inventoryItems.location : null } <br/>
                    { inventoryItems.desc ? 'Description: ' + inventoryItems.desc : null } <br/>
                    { inventoryItems.expire ? 'Expiration: ' + inventoryItems.expire : null }
                </ul>
                    { this.state.isUpdating ? <this.updateForm /> : <this.buttons /> }
            </div>
            }
            </div>
        )
    }
}

export default ItemPresenter