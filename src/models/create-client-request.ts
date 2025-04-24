import { AccessTokenTypes } from './access-token-types';
import { ApplicationTypes } from './application-types';
import { Authenticators } from './authenticators';
import { DeviceFlowCodeTypes } from './device-flow-code-types';
import { GrantTypes } from './grant-types';
import { RefreshTokenExpirationTypes } from './refresh-token-expiration-types';
import { RefreshTokenUsageTypes } from './refresh-token-usage-types';
import { RememberConsentTypes } from './remember-consent-types';
import { TechTypes } from './tech-types';

/**
 * The Create Client class models an OpenID Connect or OAuth 2.0 client - e.g. a native application, a web application or a JS-based application.
 * @export
 * @interface CreateClientRequest
 */
export interface CreateClientRequest {
  /**
   * Specifies if client is enabled.
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  enabled?: boolean;
  /**
   * Specifies the preferred application type
   * @type {ApplicationTypes}
   * @memberof CreateClientRequest
   */
  app_type?: ApplicationTypes;
  /**
   * Specifies the preferred technology type
   * @type {TechTypes}
   * @memberof CreateClientRequest
   */
  tech_type?: TechTypes;
  /**
   * If set to false, no client secret is needed to request tokens at the token endpoint
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  require_client_secret?: boolean;
  /**
   * The name of the client
   * @type {string}
   * @memberof CreateClientRequest
   */
  client_name: string;
  /**
   * A brief description of the client.
   * @type {string}
   * @memberof CreateClientRequest
   */
  description?: string | null;
  /**
   * URI for providing further information about client
   * @type {string}
   * @memberof CreateClientRequest
   */
  client_uri?: string | null;
  /**
   * URI to client logo
   * @type {string}
   * @memberof CreateClientRequest
   */
  logo_uri?: string | null;
  /**
   * Specifies whether a consent screen is required to be shown
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  require_consent?: boolean;
  /**
   * Specifies whether to show the consent screen when the offline_access scope is requested (regardless of RememberConsent)
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  always_require_consent_for_offline_access?: boolean;
  /**
   * Specifies whether user can choose to store consent decisions
   * @type {RememberConsentTypes}
   * @memberof CreateClientRequest
   */
  remember_consent?: RememberConsentTypes;
  /**
   * Specifies whether or not the user is allowed to select the scopes on the consent screen
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  show_consent_scope_selection?: boolean;
  /**
   * When requesting both an id token and access token, should the user claims always be added to the id token instead of requiring the client to use the userinfo endpoint.
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  always_include_user_claims_in_id_token?: boolean;
  /**
   * Specifies the allowed grant types (legal combinations is required).
   * @type {GrantTypes[]}
   * @memberof CreateClientRequest
   */
  allowed_grant_types: GrantTypes[];
  /**
   * Specifies whether a proof key is required for authorization code based token requests
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  require_pkce?: boolean;
  /**
   * Specifies whether a proof key can be sent using plain method (not recommended to be set to `true`)
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  allow_plain_text_pkce?: boolean;
  /**
   * Specifies whether this client needs to wrap the authorize request parameters in a JWT
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  require_request_object?: boolean;
  /**
   * Specifies whether Pushed Authorization Requests are required for authorization.
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  require_pushed_authorization_requests?: boolean;
  /**
   * Specifies whether the client will be able to use any redirect uri  and not be restricted to the whitelisted ones.
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  allow_any_pushed_authorization_redirect_uri?: boolean;
  /**
   * Specifies the expiration period of the Authorization Request in seconds.
   * @type {number}
   * @memberof CreateClientRequest
   */
  authorization_request_lifetime?: number;
  /**
   * Controls whether access tokens are transmitted via the browser for this client. This can prevent accidental leakage of access tokens when multiple response types are allowed.
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  allow_access_tokens_via_browser?: boolean;
  /**
   * Specifies allowed URIs to return tokens or authorization codes to
   * @type {string[]}
   * @memberof CreateClientRequest
   */
  redirect_uris?: string[];
  /**
   * Specifies allowed URIs to redirect to after logout
   * @type {string[]}
   * @memberof CreateClientRequest
   */
  post_logout_redirect_uris?: string[];
  /**
   * Specifies logout URI at client for HTTP front-channel based logout.
   * @type {string}
   * @memberof CreateClientRequest
   */
  front_channel_logout_uri?: string | null;
  /**
   * Specifies if the user\'s session id should be sent to the FrontChannelLogoutUri
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  front_channel_logout_session_required?: boolean;
  /**
   * Specifies logout URI at client for HTTP back-channel based logout.
   * @type {string}
   * @memberof CreateClientRequest
   */
  back_channel_logout_uri?: string | null;
  /**
   * Specifies if the user\'s session id should be sent to the BackChannelLogoutUri
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  back_channel_logout_session_required?: boolean;
  /**
   * Specifies whether to bind the tokens issued for the client with the user session. If set to true tokens / grants associated with the session will be invalidated when the user logs out or when the session expires
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  bind_tokens_to_session?: boolean;
  /**
   * Specifies whether the client can request refresh tokens (by requesting the offline_access scope)
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  allow_offline_access?: boolean;
  /**
   * Specifies the identity scopes the client is allowed to access (by default a client has no access to any resources)
   * @type {string[]}
   * @memberof CreateClientRequest
   */
  allowed_identity_scopes?: string[];
  /**
   * Lifetime of identity token in seconds
   * @type {number}
   * @memberof CreateClientRequest
   */
  identity_token_lifetime?: number;
  /**
   * Lifetime of access token in seconds
   * @type {number}
   * @memberof CreateClientRequest
   */
  access_token_lifetime?: number;
  /**
   * Lifetime of authorization code in seconds
   * @type {number}
   * @memberof CreateClientRequest
   */
  authorization_code_lifetime?: number;
  /**
   * Lifetime of a user consent in seconds. Set to 0 for no expiration.
   * @type {number}
   * @memberof CreateClientRequest
   */
  consent_lifetime?: number;
  /**
   * Maximum lifetime of a refresh token in seconds
   * @type {number}
   * @memberof CreateClientRequest
   */
  absolute_refresh_token_lifetime?: number;
  /**
   * Sliding lifetime of a refresh token in seconds
   * @type {number}
   * @memberof CreateClientRequest
   */
  sliding_refresh_token_lifetime?: number;
  /**
   * Specified the validity of a refresh token
   * @type {RefreshTokenUsageTypes}
   * @memberof CreateClientRequest
   */
  refresh_token_usage?: RefreshTokenUsageTypes;
  /**
   * Specifies a value indicating whether the access token (and its claims) should be updated on a refresh token request
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  update_access_token_claims_on_refresh?: boolean;
  /**
   * Specifies how the refresh token expires
   * @type {RefreshTokenExpirationTypes}
   * @memberof CreateClientRequest
   */
  refresh_token_expiration?: RefreshTokenExpirationTypes;
  /**
   * Specifies whether the access token is a reference token or a self contained JWT token.
   * @type {AccessTokenTypes}
   * @memberof CreateClientRequest
   */
  access_token_type?: AccessTokenTypes;
  /**
   * Specifies which authenticators can be used with this client (if list is empty all authenticators are allowed)
   * @type {Authenticators[]}
   * @memberof CreateClientRequest
   */
  authenticator_restrictions?: Authenticators[];
  /**
   * Specifies whether JWT access tokens should include an identifier
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  include_jwt_id?: boolean;
  /**
   * Allows settings claims for the client (will be included in the access token).
   * @type {{ [key: string]: any; }}
   * @memberof CreateClientRequest
   */
  claims?: Record<string, any>;
  /**
   * Specifies whether client claims should be always included in the access tokens - or only for client credentials flow.
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  always_send_client_claims?: boolean;
  /**
   * If set, the client claim will be prefixed with this value
   * @type {string}
   * @memberof CreateClientRequest
   */
  client_claims_prefix?: string;
  /**
   * The allowed CORS origins for JavaScript clients.
   * @type {string[]}
   * @memberof CreateClientRequest
   */
  allowed_cors_origins?: string[];
  /**
   * The maximum duration (in seconds) since the last time the user authenticated. You can adjust the lifetime of a session token to control when and how often a user is required to reenter credentials instead of being silently authenticated, when using a web application. Set to 0 for no restriction.
   * @type {number}
   * @memberof CreateClientRequest
   */
  user_sso_lifetime?: number;
  /**
   * Specifies the type of code that will be generated for the device code flow
   * @type {DeviceFlowCodeTypes}
   * @memberof CreateClientRequest
   */
  user_code_type?: DeviceFlowCodeTypes;
  /**
   * Specifies the length of code that will be generated for the device code flow
   * @type {number}
   * @memberof CreateClientRequest
   */
  device_code_length?: number;
  /**
   * Specifies the device code lifetime.
   * @type {number}
   * @memberof CreateClientRequest
   */
  device_code_lifetime?: number;
  /**
   * Specifies whether to auto-generate a client secret.
   * @type {boolean}
   * @memberof CreateClientRequest
   */
  auto_generate_secret?: boolean;
}
