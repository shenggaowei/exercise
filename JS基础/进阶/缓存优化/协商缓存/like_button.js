class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false, name: '升高' };
    }

    getName = name => {
        this.setState({
            name
        })
    }

    render() {
        let { name } = this.state
        return <div onClick={this.getName.bind(this, '魏升高')}>{name}</div>
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);