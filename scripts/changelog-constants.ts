/**
 * Shared constants for the changelog generation and review-check scripts.
 */

/**
 * Sentinel embedded in per-item review markers. The generator writes one line
 * containing this string beneath every generated changelog entry, e.g.
 * `> ⏳ REVIEW-PENDING @author: confirm this entry, then delete this line.` (a
 * blockquote, so it renders in a bordered box).
 * Older changelogs used an MDX comment instead
 * (`{/* REVIEW-PENDING @author ... *\/}`); both contain the sentinel, so the
 * CI check and the dev review panel recognise either. The CI check greps for
 * it and fails while any remain unresolved.
 */
export const REVIEW_MARKER = "REVIEW-PENDING";
