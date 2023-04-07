import { CreateIdentityClaimRequest } from './create-identity-claim-request';

/**
 * The Create Scope class models an OpenID Connect or OAuth 2.0 scope
 * @export
 * @interface CreateScopeRequest
 */
export interface CreateScopeRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof CreateScopeRequest
   */
  enabled: boolean;
  /**
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof CreateScopeRequest
   */
  name: string;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof CreateScopeRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof CreateScopeRequest
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof CreateScopeRequest
   */
  show_in_discovery_document: boolean;
  /**
   * Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof CreateScopeRequest
   */
  required: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof CreateScopeRequest
   */
  emphasize: boolean;
  /**
   * List of associated user claim types that should be included in the Identity token or as returned from the User Info Endpoint.
   * @type {CreateIdentityClaimRequest[]}
   * @memberof CreateScopeRequest
   */
  user_claims: CreateIdentityClaimRequest[];
}
