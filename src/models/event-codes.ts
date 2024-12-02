/**
 *
 * @export
 * @enum {string}
 */

export const EventCodes = {
  /**
   * Authentication related events
   */
  AuthorizationFailure: 'authorization_failure',
  /**
   *
   */
  AuthorizationSuccess: 'authorization_success',
  /**
   *
   */
  ParFailure: 'par_failure',
  /**
   *
   */
  ParSuccess: 'par_success',
  /**
   *
   */
  ClientAuthenticationFailure: 'client_authentication_failure',
  /**
   *
   */
  ClientAuthenticationSuccess: 'client_authentication_success',
  /**
   *
   */
  ApiAuthenticationFailure: 'api_authentication_failure',
  /**
   *
   */
  ApiAuthenticationSuccess: 'api_authentication_success',
  /**
   *
   */
  ResourceOwnerAuthenticationFailure: 'resource_owner_authentication_failure',
  /**
   *
   */
  ResourceOwnerAuthenticationSuccess: 'resource_owner_authentication_success',
  /**
   *
   */
  DeviceAuthorizationFailure: 'device_authorization_failure',
  /**
   *
   */
  DeviceAuthorizationSuccess: 'device_authorization_success',
  /**
   *
   */
  CertificateAuthenticationFailure: 'certificate_authentication_failure',
  /**
   *
   */
  CertificateAuthenticationSuccess: 'certificate_authentication_success',
  /**
   *
   */
  IdentifierSignInFailure: 'identifier_sign_in_failure',
  /**
   *
   */
  ExternalSignInFailure: 'external_sign_in_failure',
  /**
   *
   */
  UserSignInFailure: 'user_sign_in_failure',
  /**
   *
   */
  UserSignIn: 'user_sign_in',
  /**
   *
   */
  UserSignUp: 'user_sign_up',
  /**
   *
   */
  UserLogout: 'user_logout',
  /**
   * Token related events
   */
  TokenIssuedFailure: 'token_issued_failure',
  /**
   *
   */
  TokenIssuedSuccess: 'token_issued_success',
  /**
   *
   */
  TokenIntrospectionFailure: 'token_introspection_failure',
  /**
   *
   */
  TokenIntrospectionSuccess: 'token_introspection_success',
  /**
   *
   */
  TokenRevoked: 'token_revoked',
  /**
   *
   */
  ReferenceTokensUserDeleteAll: 'reference_tokens_user_delete_all',
  /**
   *
   */
  RefreshTokensUserDeleteAll: 'refresh_tokens_user_delete_all',
  /**
   * Consent related events
   */
  ConsentGranted: 'consent_granted',
  /**
   *
   */
  ConsentDenied: 'consent_denied',
  /**
   *
   */
  ConsentsUserDeletedAll: 'consents_user_deleted_all',
  /**
   * Block related events
   */
  IdentifierIpBlocked: 'identifier_ip_blocked',
  /**
   *
   */
  UserAccountIpBlocked: 'user_account_ip_blocked',
  /**
   *
   */
  UserAccountBlocked: 'user_account_blocked',
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
  UserAccountAllUnblocked: 'user_account_all_unblocked',
  /**
   *
   */
  UserAccountAllIpsUnblocked: 'user_account_all_ips_unblocked',
  /**
   * User related events
   */
  UserCreated: 'user_created',
  /**
   *
   */
  UserDeleted: 'user_deleted',
  /**
   *
   */
  UserAddedToGroup: 'user_added_to_group',
  /**
   *
   */
  UserRemovedFromGroup: 'user_removed_from_group',
  /**
   *
   */
  UserPasswordResetSuccess: 'user_password_reset_success',
  /**
   *
   */
  UserSessionRevoked: 'user_session_revoked',
  /**
   *
   */
  UserSessionsRevokedAll: 'user_sessions_revoked_all',
  /**
   *
   */
  UserSessionsDeletedAll: 'user_sessions_deleted_all',
  /**
   * Notification related events
   */
  SignInEmailSentEvent: 'sign_in_email_sent_event',
  /**
   *
   */
  VerificationEmailSentEvent: 'verification_email_sent_event',
  /**
   *
   */
  WelcomeEmailSent: 'welcome_email_sent',
  /**
   *
   */
  PasswordUpdatedEmailSent: 'password_updated_email_sent',
  /**
   *
   */
  PasswordResetEmailSent: 'password_reset_email_sent',
  /**
   *
   */
  UserBlockedEmailSent: 'user_blocked_email_sent',
  /**
   *
   */
  SignInSmsSentEvent: 'sign_in_sms_sent_event',
  /**
   *
   */
  VerificationSmsSentEvent: 'verification_sms_sent_event',
  /**
   *
   */
  PasswordResetSmsSent: 'password_reset_sms_sent',
  /**
   *
   */
  EmailSendFailure: 'email_send_failure',
  /**
   *
   */
  SmsSendFailure: 'sms_send_failure',
  /**
   * Resources related events
   */
  ApiResourceCreated: 'api_resource_created',
  /**
   *
   */
  ApiResourceUpdated: 'api_resource_updated',
  /**
   *
   */
  ApiResourceDeleted: 'api_resource_deleted',
  /**
   *
   */
  ApiResourceSecretCreated: 'api_resource_secret_created',
  /**
   *
   */
  ApiResourceSecretDeleted: 'api_resource_secret_deleted',
  /**
   * Trust Store related events
   */
  TrustStoreCertificatesUpdated: 'trust_store_certificates_updated',
  /**
   *
   */
  TrustStoreRevocationsUpdated: 'trust_store_revocations_updated',
  /**
   *
   */
  TrustStoreBannedThumbprintsUpdated: 'trust_store_banned_thumbprints_updated',
  /**
   * Clients related events
   */
  ClientCreated: 'client_created',
  /**
   *
   */
  ClientUpdated: 'client_updated',
  /**
   *
   */
  ClientDeleted: 'client_deleted',
  /**
   *
   */
  ClientAddedToGroup: 'client_added_to_group',
  /**
   *
   */
  ClientRemovedFromGroup: 'client_removed_from_group',
  /**
   *
   */
  ClientSecretCreated: 'client_secret_created',
  /**
   *
   */
  ClientSecretDeleted: 'client_secret_deleted',
  /**
   * Groups related events
   */
  GroupCreated: 'group_created',
  /**
   *
   */
  GroupUpdated: 'group_updated',
  /**
   *
   */
  GroupDeleted: 'group_deleted',
  /**
   * Authorization Codes related events
   */
  AuthorizationCodesUserDeleteAll: 'authorization_codes_user_delete_all',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type EventCodes = (typeof EventCodes)[keyof typeof EventCodes];
