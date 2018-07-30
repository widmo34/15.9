
class User extends React.Component{
    render(){

        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };


        return(
            <div style={styles}>
                <img src={this.props.avatar_url} style={{maxWidth: '100px'}} />
                <a href={this.props.user.html_url} target="_blank"> {this.props.user.login}</a>
            </div>    
        )
    }
}