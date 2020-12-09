// * Main manager for Sign In

// Import of needed templates
import * as FirebaseUsers from './firebaseUsers.js'
import * as FirebaseHelper from './firebaseHelper.js'

// * Function that uses checkActiveUser() promise
FirebaseUsers.checkActiveUser()
            .then(() => {
                console.log('user exists');
            }, function () {
                console.log('no user exists');
            });
// *

// * Function for log in
$('#submitbtnLogin').click(signInClicked);
function signInClicked() {
    let userEmail = $('#login_InputEmail').val();
    let userPassword = $('#login_InputPassword').val();
    FirebaseUsers.signInUser(userEmail, userPassword)
                .then(() => {
                    location.reload(true)
                    console.log('Sucessfully logged in');
                }, function () {
                    $('#errorAlert').show();
                    console.log('failed to log in');
                })

}
// *

// * Function for determining access level
FirebaseHelper
        .getSnapShot('users')
        .then(function(value) {
            let {name, state} = value;
            if (state == 'Customer') {
                window.location.href = 'html/_customerStore.html';
            } else {
                window.location.href = 'html/_adminStore.html';
            }

        })
