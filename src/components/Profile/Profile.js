import React, { Component } from 'react'

import UserProfile from './UserProfile'

class Profile extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <UserProfile firstName='dummy' lastName='dummy' email='dummy' />
    }

}

export default Profile
