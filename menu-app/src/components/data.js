// data.js

export const loggedInUser = {
    id: 1,
    username: 'juvelina',
    avatar: 'https://i.pravatar.cc/150?img=3'
  };

  

export const users = [
    {
      id: 1,
      username: 'john_doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      username: 'jane_smith',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    // ... more users
  ];
  
  export const posts = [
    {
      id: 1,
      userId: 1,
      imageUrl: 'https://media.gazetadopovo.com.br/2023/07/25092225/chicken-steak-with-lemon-tomato-chili-carrot-white-plate-1280x720.jpg',
      caption: 'Delicious chicken steak for dinner!',
      timestamp: '2023-10-01T12:00:00Z',
    },
    {
      id: 2,
      userId: 2,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Moqueca.jpg/600px-Moqueca.jpg',
      caption: 'Moqueca :D',
      timestamp: '2023-10-02T09:30:00Z',
    },
    {
      id: 3,
      userId: 1,
      imageUrl: 'https://www.qgjeitinhocaseiro.com/wp-content/uploads/2019/12/dicas-de-almoço-saudável.jpg',
      caption: 'Peixinho! Hmm',
      timestamp: '2023-10-03T14:20:00Z',
    },
    // ... more posts
  ];
  
  export const followedUserIds = [1, 2];