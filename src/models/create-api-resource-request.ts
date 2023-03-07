import { CreateSecretRequest } from './create-secret-request';

/**
 * The Create Api Resource class models an OpenID Connect or OAuth 2.0 api resource
 * @export
 * @interface CreateApiResourceRequest
 */
export interface CreateApiResourceRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  enabled: boolean;
  /**
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  name: string;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  show_in_discovery_document: boolean;
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {string[]}
   * @memberof CreateApiResourceRequest
   */
  user_claims: string[];
  /**
   * The Api secret is used for the introspection endpoint. The API can authenticate with introspection using the API name and secret.
   * @type {CreateSecretRequest[]}
   * @memberof CreateApiResourceRequest
   */
  api_secrets: CreateSecretRequest[];
  /**
   * List of API scope names.
   * @type {string[]}
   * @memberof CreateApiResourceRequest
   */
  scopes: string[];
}
