/**
 * Shared constants for the changelog generation and review-check scripts.
 */

/**
 * Sentinel embedded in per-item review markers. The generator writes one MDX
 * comment containing this string beneath every generated changelog entry; the
 * CI check greps for it and fails while any remain unresolved.
 */
export const REVIEW_MARKER = "REVIEW-PENDING";
