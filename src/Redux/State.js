import {rerender} from "../redux";

let state= {
    messageData: [
        {id:1, message: 'How are you?'},
        {id:2, message: 'Can you help me?'},
        {id:3, message: 'Show me your diet,please'}
    ],
    dialogDate: [
        {id:1, name: 'Nate' },
        {id:2, name: 'Serena' },
        {id:3, name: 'Blair' },
        {id:4, name: 'Dan' },
        {id:5, name: 'Erick' }
    ],
    postData: [
        {id:1, header:'My first week' , message:'It was hard.But I did it', likesCount: 321 },
        {id:2, header:'My second week' , message:'It was not so bad' , likesCount:489  },
        {id:3, header:'My third week' , message: 'I feel so good' , likesCount: 313 }
    ],
    profileData: [
        {id: 1, name: 'Anna', age: 21 , country: 'Russia'}
    ]
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        header:'Yech',
        message: postMessage,
        likesCount: 0
    };
    state.postData.push(newPost);
    rerender(state);

};

export let sendMessage = (Message)=>{
    let newMessage = {
        id: 3,
        message: Message
    };
    state.messageData.push(newMessage)
};

export default state;