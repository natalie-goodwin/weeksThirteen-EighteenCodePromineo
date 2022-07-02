import React from 'react';
import ReplyButton from './reply-button';  
import LikeButton from './like-button';
/*the links being imported are other js files 
in components folder */
let e = React.createElement;

export default class Comment extends React.Component {
    render() { /*what follows is understood as divs inside of divs*/
       return e('div', 
        {class: 'card w-75'}, 
       e('div',
         {class: 'card-header bg-success text-white'}, 
         'Username and Time'), // closing first element
       e('div',
         {class: 'card-body'},
         'Comment Content'), //closing second element
       e('div',
         {class: 'card-footer'},
       e(LikeButton, {}, null), /*putting in just the class name and it automatically 
         adds all info from LikeButton class in like-button.js*/
       e('span', {}, ' '),
       e(ReplyButton, {}, null)  
       )   //closing for last div 
      ); //closing for first div
    } //closing render() bracket
}//closing first bracket