/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */

type User = {
  id: number;
  name: string;
  type: 'EMPLOYEE' | 'CONTRACTOR';
}


// eslint-disable-next-line func-names
module.exports.groupUsers = function ( users: Array <User> ): Record < 'employees' | 'contractors', Array <User> > {
    return {
      employees: users.filter(user => user.type === 'EMPLOYEE'),
      contractors: users.filter(user => user.type === 'CONTRACTOR'),
    };
  };
