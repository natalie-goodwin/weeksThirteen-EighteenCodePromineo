import React from 'react';
import ReplyButton from  './reply-button';
import LikeButton from './like-button';
import Comment from './comment';

let e = React.createElement;

export default class Post extends React.Component {
    render() {
       return e('div', 
         {class: 'card w-75'}, 
       e('div',
         {class: 'card-header bg-success text-white'}, 
         'Username and Time'), // closing first element
       e('div',
         {class: 'card-body'},
         'Post Content'), //closing second element
       e('div',
         {class: 'card-footer'},
       e(LikeButton, {}, null), /*putting in just the class name and it automatically 
         adds all info from LikeButton class in like-button.js*/
       e('span', {}, ' '),
       e(ReplyButton, {}, null),
       e('br', {}, null),
       e(Comment, {}, null),
       e(Comment, {}, null)
       )   //closing for last div 
    ); //closing for first div
   } //closing render() bracket
} //closing first bracket