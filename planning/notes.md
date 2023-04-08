https://blog.logrocket.com/guide-adding-google-login-react-app/

# Firebase

- [Tutorial](https://blog.logrocket.com/user-authentication-firebase-react-apps/)
- Verified that apikey is safe to be public
- Register component: tutorial recommended useHistory but [research suggests](https://medium.com/@kgreve14/usehistory-usenavigate-5b383160adba) that hook is no longer used and useNavigate is a better option.

# React Router

- [Protecting routes](https://www.robinwieruch.de/react-router-private-routes/)
- The protected route component checks whether the user is authenticated. The user can only access these routes when signed in.

# MySQL

- Command to run SQL: `mysql -u username -p password ojs < "C:\ojs.sql"`
- See current password requirements: `SHOW VARIABLES LIKE 'validate_password%';`
- See existing users: `select user, host from mysql.user;`
