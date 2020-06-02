import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "c33730dd-890d-4535-8fcf-78a73ca432a2"
  }
});

export const getUsers = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data;
    })
}
export const getHeader = () => {
  return instance.get(`auth/me`)
    .then(response => {
      return response.data;
    })
}
// export  const usersDelete = (id) => {
//   return   axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
//   {
//       withCredentials: true,
//       headers: {
//           "API-KEY": "c33730dd-890d-4535-8fcf-78a73ca432a2"
//       }
//   }
// )
//      .then(response => {
//        return response.data;
//         })
// }

