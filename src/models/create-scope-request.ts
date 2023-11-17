import { CreateScopeClaimRequest } from './create-scope-claim-request';
import { ScopeTypes } from './scope-types';

/**
 * The Create Scope Resource class
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
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof CreateScopeRequest
   */
  name: string;
  /**
   * Specifies the type of scope
   * @type {ScopeTypes}
   * @memberof CreateScopeRequest
   */
  type: ScopeTypes;
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
   * List of associated user claim types that should be included in the Identity token, Access Token or as returned from the User Info Endpoint.
   * @type {CreateScopeClaimRequest[]}
   * @memberof CreateScopeRequest
   */
  user_claims: CreateScopeClaimRequest[];
}
