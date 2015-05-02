var React = require('react');
var AboutActions = require('../actions/aboutActions');
var AboutStore = require('../stores/aboutStore');

var About = React.createClass({

    getInitialState: function(){

        return this.getStateFromStore();
    },

    getStateFromStore: function(){

        return {
            content: AboutStore.getContent()
        };
    },

    setStateFromStore: function(){

        this.setState({
            content: AboutStore.getContent()
        });
    },

    componentDidMount: function(){

        if( this.state.content === null ){

            AboutActions.LOAD();
            this.unsubscribe = AboutStore.listen(this.setStateFromStore.bind(this));
        }
    },

    componentWillUnmount: function(){

        if(typeof this.unsubscribe === 'function' ){

            this.unsubscribe();
        }
    },

    render: function(){

        var content = (this.state.content === null ) ? '<p>Loading...</p>' : this.state.content;

        return (
            <div className="container-fluid">
                <div className="well h4 text-center" dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
        );
    }
});

module.exports = About;