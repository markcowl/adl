
/**
 * @description Determines the type of confirmation e-mail that will be sent to the newly created user.
 * @extensible
 */
export enum Confirmation {
    /** Send an e-mail to the user confirming they have successfully signed up. */
    signup = 'signup',
    /** Send an e-mail inviting the user to sign-up and complete registration. */
    invite = 'invite'
}
