/**
 * Indicates the type of target on which an action was performed.
 * @export
 * @enum {string}
 */

export const TargetTypes = {
  /**
   * A user
   */
  User: 'user',
  /**
   * A tenant
   */
  Tenant: 'tenant',
  /**
   * A tenant key
   */
  TenantKey: 'tenant_key',
  /**
   * Subscription
   */
  Subscription: 'subscription',
  /**
   * A client
   */
  Client: 'client',
  /**
   * A client secret
   */
  ClientSecret: 'client_secret',
  /**
   * A group
   */
  Group: 'group',
  /**
   * The user consent
   */
  UserConsent: 'user_consent',
  /**
   * The user identifier
   */
  UserIdentifier: 'user_identifier',
  /**
   * The authenticator
   */
  Authenticator: 'authenticator',
  /**
   * The ip address
   */
  IpAddress: 'ip_address',
  /**
   * An user session
   */
  UserSession: 'user_session',
  /**
   * An user grant
   */
  UserGrants: 'user_grants',
  /**
   * The Trust Store
   */
  TrustStore: 'trust_store',
  /**
   * An Api Resource
   */
  ApiResource: 'api_resource',
  /**
   * An Api Resource secret
   */
  ApiResourceSecret: 'api_resource_secret',
  /**
   * A Claim Resource
   */
  ClaimResource: 'claim_resource',
  /**
   * A Scope
   */
  Scope: 'scope',
  /**
   * An Api Scope
   */
  ApiScope: 'api_scope',
  /**
   * A Key Material
   */
  KeyMaterial: 'key_material',
  /**
   * The System
   */
  System: 'system',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TargetTypes = (typeof TargetTypes)[keyof typeof TargetTypes];
