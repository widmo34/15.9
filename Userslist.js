class Userlist extends React.Components {
    
    get users(){
        return this.props.users.map(user => <User key={user.id}  user={user}/>)
    }

    render(){
        return(
            <div>
                {this.users}
            </div>    
        );
    }
}


