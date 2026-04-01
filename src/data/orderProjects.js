/** Always show Voice Command first, regardless of source array order. */
export function orderProjectsWithVoiceFirst(list) {
  if (!list?.length) return []
  const next = [...list]
  const idx = next.findIndex((p) => p.id === 'voice-command')
  if (idx <= 0) return next
  const [voice] = next.splice(idx, 1)
  return [voice, ...next]
}
