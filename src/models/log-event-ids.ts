/**
 *
 * @export
 * @enum {string}
 */

export const LogEventIds = {
  /**
   *
   */
  AuthorizationSuccess: 'authorization_success',
  /**
   *
   */
  AuthorizationFailure: 'authorization_failure',
  /**
   *
   */
  ResourceOwnerAuthenticationSuccess: 'resource_owner_authentication_success',
  /**
   *
   */
  ResourceOwnerAuthenticationFailure: 'resource_owner_authentication_failure',
  /**
   *
   */
  ClientAuthenticationSuccess: 'client_authentication_success',
  /**
   *
   */
  ClientAuthenticationFailure: 'client_authentication_failure',
  /**
   *
   */
  ApiAuthenticationSuccess: 'api_authentication_success',
  /**
   *
   */
  ApiAuthenticationFailure: 'api_authentication_failure',
  /**
   *
   */
  CertificateAuthenticationSuccess: 'certificate_authentication_success',
  /**
   *
   */
  CertificateAuthenticationFailure: 'certificate_authentication_failure',
  /**
   *
   */
  UserLogoutSuccess: 'user_logout_success',
  /**
   *
   */
  UserSignInFailure: 'user_sign_in_failure',
  /**
   *
   */
  UserSignInSuccess: 'user_sign_in_success',
  /**
   *
   */
  UserAccountBlocked: 'user_account_blocked',
  /**
   *
   */
  UserAccountIpBlocked: 'user_account_ip_blocked',
  /**
   *
   */
  UserAccountUnblocked: 'user_account_unblocked',
  /**
   *
   */
  UserAccountIpUnblocked: 'user_account_ip_unblocked',
  /**
   *
   */
  UserAccountAllIpsUnblocked: 'user_account_all_ips_unblocked',
  /**
   *
   */
  UserAccountAllUnblocked: 'user_account_all_unblocked',
  /**
   *
   */
  UserPasswordResetSuccess: 'user_password_reset_success',
  /**
   *
   */
  UserSessionCreated: 'user_session_created',
  /**
   *
   */
  UserSessionRenewed: 'user_session_renewed',
  /**
   *
   */
  UserSessionRemoved: 'user_session_removed',
  /**
   *
   */
  UserSignUpSuccess: 'user_sign_up_success',
  /**
   *
   */
  UserNewAuthenticatorAdded: 'user_new_authenticator_added',
  /**
   *
   */
  UserDeleted: 'user_deleted',
  /**
   *
   */
  TokenIssuedSuccess: 'token_issued_success',
  /**
   *
   */
  TokenIssuedFailure: 'token_issued_failure',
  /**
   *
   */
  TokenRevokedSuccess: 'token_revoked_success',
  /**
   *
   */
  TokenIntrospectionSuccess: 'token_introspection_success',
  /**
   *
   */
  TokenIntrospectionFailure: 'token_introspection_failure',
  /**
   *
   */
  InvalidClientConfiguration: 'invalid_client_configuration',
  /**
   *
   */
  ConsentGranted: 'consent_granted',
  /**
   *
   */
  ConsentDenied: 'consent_denied',
  /**
   *
   */
  GrantsRevoked: 'grants_revoked',
  /**
   *
   */
  DeviceAuthorizationSuccess: 'device_authorization_success',
  /**
   *
   */
  DeviceAuthorizationFailure: 'device_authorization_failure',
  /**
   *
   */
  PasswordlessSignInNotificationSentEvent:
    'passwordless_sign_in_notification_sent_event',
  /**
   *
   */
  SignUpVerificationNotificationSentEvent:
    'sign_up_verification_notification_sent_event',
  /**
   *
   */
  UserPasswordResetNotificationSent: 'user_password_reset_notification_sent',
  /**
   *
   */
  UserBlockedNotificationSent: 'user_blocked_notification_sent',
  /**
   *
   */
  UserWelcomeNotificationSent: 'user_welcome_notification_sent',
  /**
   *
   */
  UserPasswordUpdatedNotificationSent:
    'user_password_updated_notification_sent',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type LogEventIds = (typeof LogEventIds)[keyof typeof LogEventIds];
