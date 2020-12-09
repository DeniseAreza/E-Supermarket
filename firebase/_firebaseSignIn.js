// * Main manager for Sign In

// Import of needed templates
import * as FirebaseUsers from './firebaseUsers.js'

// * Function that uses checkActiveUser() promise
FirebaseUsers.checkActiveUser()
            .then(() => {
                console.log('user exists');
            }, function () {
                console.log('no user exists');
            });

$('#submitbtnLogin').click(signInClicked);
function signInClicked() {
    let userEmail = $('#login_InputEmail').val();
    let userPassword = $('#login_InputPassword').val();
    FirebaseUsers.signInUser(userEmail, userPassword)
                .then(() => {
                    window.location.href = 'html/_adminStore.html';
                    console.log('Sucessfully logged in');
                }, function () {
                    $('#errorAlert').show();
                    console.log('failed to log in');
                })

}
