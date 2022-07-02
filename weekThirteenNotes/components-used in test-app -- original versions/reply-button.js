import React from 'react';

export default class LikeButton extends React.Component {
    render() { /*render method is where we define what the component will look like;
        or what html will be rendered to the application screen*/
        return React.createElement('button', {class: 'btn btn primary'}, 'Reply');
    }
}
/*React.Component is the class that comes with React that we can extend to create
 the components we are working on*/