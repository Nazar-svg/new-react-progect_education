import React from 'react';

const Friends = ({dialogs}) => {
   console.log(dialogs);
const friendsMaper = dialogs.map(item => <div key={item.id}>{item.name}</div>)
    return (
        <div>
           {friendsMaper} 
        </div>
    )
}
export default Friends;