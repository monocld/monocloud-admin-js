import { CreateScopeClaimRequest } from './create-scope-claim-request';

/**
 * The Create Scope Resource class
 * @export
 * @interface CreateScopeRequest
 */
export interface CreateScopeRequest {
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
  show_in_discovery_document?: boolean;
  /**
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof CreateScopeRequest
   */
  name: string;
  /**
   * Specifies whether the user can de-select the scope on the consent screen.
   * @type {boolean}
   * @memberof CreateScopeRequest
   */
  required?: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope. Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof CreateScopeRequest
   */
  emphasize?: boolean;
  /**
   * List of associated user claim types that should be included in the Identity token or as returned from the User Info Endpoint.
   * @type {CreateScopeClaimRequest[]}
   * @memberof CreateScopeRequest
   */
  user_claims: CreateScopeClaimRequest[];
}
