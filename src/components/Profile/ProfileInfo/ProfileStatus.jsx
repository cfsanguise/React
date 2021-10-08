import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status ? this.props.status: '----'
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true,
            status: this.props.status
        });
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        } );
        this.props.updateStatus(this.state.status, this.props.userId);
    }

    onInputChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }


    render() {
        return (
        <>
            {!this.state.editMode && 
                <div>
                    <h2 onDoubleClick={this.activateEditMode}>Status: {this.props.status}</h2>
                </div>
            }

            {this.state.editMode &&
                <div>
                    <input onChange={this.onInputChange} autoFocus onBlur={this.deactivateEditMode} onDoubleClick={this.deactivateEditMode} value={this.state.status} type="text" />
                </div>
            }
        </>
        )
    }
}

export default ProfileStatus;