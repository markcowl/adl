
/**
 * @description Terms of service contract properties.
 */
export interface TermsOfServiceProperties {
    /**
     * @description A terms of service text.
     */
    text: string;
    /**
     * @description Display terms of service during a sign-up process.
     */
    enabled: boolean;
    /**
     * @description Ask user for consent to the terms of service.
     */
    consentRequired: boolean;
}
