/**
 *
 * @export
 * @enum {string}
 */

export const SecretTypes = {
  /**
   *
   */
  SharedSecret: 'shared_secret',
  /**
   *
   */
  X509Thumbprint: 'x509_thumbprint',
  /**
   *
   */
  X509Name: 'x509_name',
  /**
   *
   */
  X509IssuerName: 'x509_issuer_name',
  /**
   *
   */
  X509CertificateBase64: 'x509_certificate_base64',
  /**
   *
   */
  Jwk: 'jwk',
  /**
   *
   */
  JwtAssertionSharedSecret: 'jwt_assertion_shared_secret',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SecretTypes = (typeof SecretTypes)[keyof typeof SecretTypes];
